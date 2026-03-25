import { useEffect, useMemo, useRef, useState } from "react";
import "./TerminalIntro.css";
import cvTxt from "../../assets/cv.txt?raw";

const introParagraphs = [
  "Hands-on fullstack architect with AI-native delivery mindset and a Master's degree in Computer Science and Engineering.",
  "I help teams ship faster with scalable architecture, clean code, and pragmatic technical decisions.",
  "Strong in Java, Python, TypeScript, React, and cloud-native backend design.",
  "Using AI daily to accelerate research, prototyping, implementation, and quality.",
  "Clear communicator and easy-to-work-with partner who aligns business and engineering to deliver reliable, maintainable software.",
  "tip: type help for commands",
];

const introText = introParagraphs.join("\n\n");
const START_DELAY_MS = 350;
const TYPE_DELAY_MS = 22;
const CLEAR_COMMAND = "clear";
const CAT_COMMAND = "cat";
const FULLSCREEN_COMMAND = "fullscreen";
const KNOWN_COMMAND_NAMES = [
  "help",
  "whoami",
  "ls",
  CAT_COMMAND,
  CLEAR_COMMAND,
  "fullscreen on",
  "fullscreen off",
].sort();
const AVAILABLE_FILES = ["cv.pdf"] as const;
const FILE_CONTENTS: Record<(typeof AVAILABLE_FILES)[number], string> = {
  "cv.pdf": cvTxt,
};
const WHOAMI_RESPONSE = "RichieRock";
const OUTPUT_TYPEWRITER_DELAY_MS = 10;
const OUTPUT_TYPEWRITER_STEP = 8;

interface HistoryEntry {
  command: string;
  output: string;
  typewriterOutput?: boolean;
}

type CommandHandlerContext = {
  clearTerminal: () => void;
  setFullscreen: (enabled: boolean) => void;
  knownCommands: string[];
};

type CommandHandler = (
  args: string[],
  context: CommandHandlerContext,
) => string;

const HistoryOutput = ({
  text,
  typewriter,
}: {
  text: string;
  typewriter?: boolean;
}) => {
  const [visibleLength, setVisibleLength] = useState(
    typewriter ? 0 : text.length,
  );

  useEffect(() => {
    if (!typewriter) {
      setVisibleLength(text.length);
      return;
    }

    setVisibleLength(0);

    const intervalId = window.setInterval(() => {
      setVisibleLength((previousLength) => {
        if (previousLength >= text.length) {
          window.clearInterval(intervalId);
          return previousLength;
        }

        return Math.min(previousLength + OUTPUT_TYPEWRITER_STEP, text.length);
      });
    }, OUTPUT_TYPEWRITER_DELAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [text, typewriter]);

  return <>{text.slice(0, visibleLength)}</>;
};

export const TerminalIntro = () => {
  const [typedLength, setTypedLength] = useState(0);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [typewriterRunId, setTypewriterRunId] = useState(0);
  const [commandInput, setCommandInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const promptInputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasStartedTyping) {
      return;
    }

    const terminalElement = terminalRef.current;

    if (!terminalElement) {
      return;
    }

    if (typeof window.IntersectionObserver === "undefined") {
      setHasStartedTyping(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHasStartedTyping(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(terminalElement);

    return () => {
      observer.disconnect();
    };
  }, [hasStartedTyping]);

  useEffect(() => {
    if (!hasStartedTyping) {
      return;
    }

    setTypedLength(0);

    let intervalId: number | undefined;

    const startTimeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setTypedLength((previousLength) => {
          if (previousLength >= introText.length) {
            if (intervalId) {
              window.clearInterval(intervalId);
            }

            return previousLength;
          }

          return previousLength + 1;
        });
      }, TYPE_DELAY_MS);
    }, START_DELAY_MS);

    return () => {
      window.clearTimeout(startTimeoutId);

      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [hasStartedTyping, typewriterRunId]);

  const typedText = useMemo(
    () => introText.slice(0, typedLength),
    [typedLength],
  );

  const focusPrompt = () => {
    promptInputRef.current?.focus();
  };

  const handleCommandSubmit = (command: string) => {
    const normalizedCommand = command.trim();
    const normalizedCommandLower = normalizedCommand.toLowerCase();
    const [baseCommand, ...args] = normalizedCommandLower.split(/\s+/);

    if (!normalizedCommand) {
      return;
    }

    const clearTerminal = () => {
      setHistory([]);
      setTypewriterRunId((previousRunId) => previousRunId + 1);
    };

    const commandHandlers: Record<string, CommandHandler> = {
      whoami: () => WHOAMI_RESPONSE,
      ls: () => AVAILABLE_FILES.join("\n"),
      [CAT_COMMAND]: (commandArgs) => {
        if (commandArgs.length !== 1) {
          return "usage: cat <filename>";
        }

        const [fileName] = commandArgs;

        if (
          !AVAILABLE_FILES.includes(
            fileName as (typeof AVAILABLE_FILES)[number],
          )
        ) {
          return `cat: ${fileName}: No such file`;
        }

        if (fileName === "cv.pdf") {
          setIsFullscreen(true);
        }

        return FILE_CONTENTS[fileName as (typeof AVAILABLE_FILES)[number]];
      },
      [FULLSCREEN_COMMAND]: (commandArgs, context) => {
        if (commandArgs.length !== 1) {
          return "usage: fullscreen <on|off>";
        }

        const [fullscreenValue] = commandArgs;

        if (fullscreenValue === "on") {
          context.setFullscreen(true);
          return "fullscreen enabled";
        }

        if (fullscreenValue === "off") {
          context.setFullscreen(false);
          return "fullscreen disabled";
        }

        return "usage: fullscreen <on|off>";
      },
      [CLEAR_COMMAND]: (_commandArgs, context) => {
        context.clearTerminal();
        return "";
      },
      help: (_commandArgs, context) =>
        `Known commands: ${context.knownCommands.join(", ")}`,
    };

    const handler = commandHandlers[baseCommand];
    const output = handler
      ? handler(args, {
          clearTerminal,
          setFullscreen: setIsFullscreen,
          knownCommands: KNOWN_COMMAND_NAMES,
        })
      : "command not found";

    const shouldTypewriterOutput =
      baseCommand === CAT_COMMAND && args.length === 1 && args[0] === "cv.pdf";

    if (baseCommand === CLEAR_COMMAND) {
      setCommandInput("");
      return;
    }

    setHistory((previousHistory) => [
      ...previousHistory,
      {
        command: normalizedCommand,
        output,
        typewriterOutput: shouldTypewriterOutput,
      },
    ]);
    setCommandInput("");
    setHistoryIndex(-1);
  };

  const commandHistory = useMemo(
    () => history.map((entry) => entry.command),
    [history],
  );

  useEffect(() => {
    if (hasStartedTyping) {
      focusPrompt();
    }
  }, [hasStartedTyping]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (!isFullscreen) {
      return;
    }

    // Escape fullscreen on escape key
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  useEffect(() => {
    const screenElement = screenRef.current;

    if (!screenElement) {
      return;
    }

    screenElement.scrollTop = screenElement.scrollHeight;
  }, [typedLength, history, commandInput]);

  return (
    <div
      className={`terminal${isFullscreen ? " terminal-fullscreen" : ""}`}
      ref={terminalRef}
      onClick={focusPrompt}
    >
      <div className="menu border-b border-slate-400 bg-slate-200 text-slate-600 dark:border-slate-800 dark:bg-slate-600 dark:text-slate-300">
        <div className="window-buttons close"></div>
        <div className="window-buttons minimize"></div>
        <button
          aria-label="Fullscreen"
          className="window-buttons zoom"
          onClick={(event) => {
            event.stopPropagation();
            setIsFullscreen((previousState) => !previousState);
          }}
          title="Fullscreen"
          type="button"
        ></button>
      </div>
      <div
        className="screen bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-emerald-100"
        ref={screenRef}
      >
        <div className="code">
          <pre id="typewriter" aria-live="polite">
            {typedText}
          </pre>

          <div aria-live="polite" className="history">
            {history.map((historyEntry, index) => (
              <div className="history-entry" key={historyEntry.command + index}>
                <p className="prompt-line">
                  <span className="prompt-sign">$</span>
                  <span>{historyEntry.command}</span>
                </p>
                <p className="history-output whitespace-pre-wrap">
                  <HistoryOutput
                    text={historyEntry.output}
                    typewriter={historyEntry.typewriterOutput}
                  />
                </p>
              </div>
            ))}
          </div>

          <p className="prompt-line">
            <span className="prompt-sign">$</span>
            <span className="prompt-input-text">{commandInput}</span>
            <span className="cursor">|</span>
            <input
              aria-label="Terminal prompt"
              className="prompt-input-hidden"
              onChange={(event) => setCommandInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  handleCommandSubmit(commandInput);
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  if (commandHistory.length === 0) return;
                  const newIndex =
                    historyIndex === -1
                      ? commandHistory.length - 1
                      : Math.max(0, historyIndex - 1);
                  setHistoryIndex(newIndex);
                  setCommandInput(commandHistory[newIndex]);
                  const input = event.currentTarget;
                  input.value = commandHistory[newIndex];
                } else if (event.key === "ArrowDown") {
                  event.preventDefault();
                  if (historyIndex === -1) return;
                  const newIndex = historyIndex + 1;
                  const newValue =
                    newIndex >= commandHistory.length
                      ? ""
                      : commandHistory[newIndex];
                  setHistoryIndex(
                    newIndex >= commandHistory.length ? -1 : newIndex,
                  );
                  setCommandInput(newValue);
                  const input = event.currentTarget;
                  input.value = newValue;
                }
              }}
              ref={promptInputRef}
              spellCheck={false}
              type="text"
              value={commandInput}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
