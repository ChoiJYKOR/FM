"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface LectureContentProps {
  lecture1: string;
  lecture2: string;
  lecture3: string;
  lectureBonus: string;
}

export default function LectureContent({
  lecture1,
  lecture2,
  lecture3,
  lectureBonus,
}: LectureContentProps) {
  const [activePart, setActivePart] = useState<1 | 2 | 3 | "bonus">(1);

  const getCurrentContent = () => {
    switch (activePart) {
      case 1:
        return lecture1;
      case 2:
        return lecture2;
      case 3:
        return lecture3;
      case "bonus":
        return lectureBonus;
    }
  };

  return (
    <>
      {/* Tabs */}
      <div className="mb-8 md:mb-12">
        <div className="flex space-x-2 md:space-x-4 border-b border-gray-200">
          {[1, 2, 3, "bonus"].map((part) => (
            <button
              key={part}
              onClick={() => setActivePart(part as 1 | 2 | 3 | "bonus")}
              className={`px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-semibold transition-all duration-200 border-b-2 ${activePart === part
                  ? "text-primary border-primary"
                  : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300"
                }`}
            >
              {part === "bonus" ? "번외편" : `${part}부`}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="markdown-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || "");
                const language = match ? match[1] : "";
                const codeString = String(children).replace(/\n$/, "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    language={language}
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: "0.5rem",
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      padding: "1rem",
                      maxHeight: "600px",
                      overflowY: "auto",
                    }}
                    showLineNumbers={true}
                    wrapLines={true}
                    wrapLongLines={true}
                    codeTagProps={{
                      style: {
                        fontFamily:
                          'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
                      },
                    }}
                    {...props}
                  >
                    {codeString}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className={`${className} bg-gray-100 px-1.5 py-0.5 rounded text-sm`}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => (
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-base md:text-lg leading-relaxed">
                  {children}
                </li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-4">
                  {children}
                </blockquote>
              ),
              hr: () => <hr className="my-8 border-gray-200" />,
              strong: ({ children }) => (
                <strong className="font-bold text-gray-900">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic text-gray-700">{children}</em>
              ),
            }}
          >
            {getCurrentContent()}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}


