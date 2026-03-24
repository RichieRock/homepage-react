import { useEffect, useMemo, useRef, useState } from "react";
import "./TerminalIntro.css";

const introParagraphs = [
  "AI-experienced hands-on fullstack architect with a Master's degree in Computer Science and Engineering.",
  "Strong in Java, Python, TypeScript, React and architectural design. AI-native development to speed up research, prototyping, and code quality.",
  "Deep understanding of software architecture, design patterns, and best practices.",
  "Passionate about building scalable and maintainable software solutions that meet business needs.",
  "Experienced in leading development teams and collaborating with cross-functional teams to deliver high-quality software products.",
];

const introText = introParagraphs.join("\n\n");
const START_DELAY_MS = 350;
const TYPE_DELAY_MS = 22;

export const TerminalIntro = () => {
  const [typedLength, setTypedLength] = useState(0);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

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
  }, [hasStartedTyping]);

  const typedText = useMemo(
    () => introText.slice(0, typedLength),
    [typedLength],
  );

  return (
    <div className="terminal" ref={terminalRef}>
      <div className="menu border-b border-slate-400 bg-slate-200 text-slate-600 dark:border-slate-800 dark:bg-slate-600 dark:text-slate-300">
        <div className="window-buttons close"></div>
        <div className="window-buttons minimize"></div>
        <div className="window-buttons zoom"></div>
      </div>
      <div className="screen bg-slate-100 text-slate-800 dark:bg-gray-900 dark:text-emerald-100">
        <div className="code">
          <pre id="typewriter" aria-live="polite">
            {typedText}
          </pre>

          <p className="prompt-line">
            <span className="prompt-sign">$</span>
            <span className="cursor">|</span>
          </p>
        </div>
      </div>
    </div>
  );
};
