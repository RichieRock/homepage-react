import { useEffect, useMemo, useRef, useState } from "react";
import "./TerminalIntro.css";

const introParagraphs = [
  "Hands-on fullstack architect with AI-native delivery mindset and a Master's degree in Computer Science and Engineering.",
  "I help teams ship faster with scalable architecture, clean code, and pragmatic technical decisions.",
  "Strong in Java, Python, TypeScript, React, and cloud-native backend design.",
  "Using AI daily to accelerate research, prototyping, implementation, and quality.",
  "Clear communicator and easy-to-work-with partner who aligns business and engineering to deliver reliable, maintainable software.",
];

const introText = introParagraphs.join("\n\n");
const START_DELAY_MS = 350;
const TYPE_DELAY_MS = 22;
const CLEAR_COMMAND = "clear";
const CAT_COMMAND = "cat";
const KNOWN_COMMAND_NAMES = [
  "help",
  CLEAR_COMMAND,
  CAT_COMMAND,
  "ls",
  "whoami",
].sort();
const AVAILABLE_FILES = ["cv.pdf"] as const;
const FILE_CONTENTS: Record<(typeof AVAILABLE_FILES)[number], string> = {
  "cv.pdf": "[pdf] cv.pdf",
};
const WHOAMI_RESPONSE = "RichieRock";

interface HistoryEntry {
  command: string;
  output: string;
}

type CommandHandlerContext = {
  clearTerminal: () => void;
  knownCommands: string[];
};

type CommandHandler = (
  args: string[],
  context: CommandHandlerContext,
) => string;

export const TerminalIntro = () => {
  const [typedLength, setTypedLength] = useState(0);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [typewriterRunId, setTypewriterRunId] = useState(0);
  const [commandInput, setCommandInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([]);
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

        return FILE_CONTENTS[fileName as (typeof AVAILABLE_FILES)[number]];
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
          knownCommands: KNOWN_COMMAND_NAMES,
        })
      : "command not found";

    if (baseCommand === CLEAR_COMMAND) {
      setCommandInput("");
      return;
    }

    setHistory((previousHistory) => [
      ...previousHistory,
      {
        command: normalizedCommand,
        output,
      },
    ]);
    setCommandInput("");
  };

  useEffect(() => {
    if (hasStartedTyping) {
      focusPrompt();
    }
  }, [hasStartedTyping]);

  useEffect(() => {
    const screenElement = screenRef.current;

    if (!screenElement) {
      return;
    }

    screenElement.scrollTop = screenElement.scrollHeight;
  }, [typedLength, history, commandInput]);

  return (
    <div className="terminal" ref={terminalRef} onClick={focusPrompt}>
      <div className="menu border-b border-slate-400 bg-slate-200 text-slate-600 dark:border-slate-800 dark:bg-slate-600 dark:text-slate-300">
        <div className="window-buttons close"></div>
        <div className="window-buttons minimize"></div>
        <div className="window-buttons zoom"></div>
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
                <p className="history-output">{historyEntry.output}</p>
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
