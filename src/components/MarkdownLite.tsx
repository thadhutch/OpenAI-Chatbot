import Link from "next/link";
import React, { FC } from "react";

interface MarkdownLiteProps {
  text: string;
}

const MarkdownLite: FC<MarkdownLiteProps> = ({ text }) => {
  const linkRegex = /\[(.+?)\]\((.+?)\)/g;
  const parts = [];

  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, linkUrl] = match;
    const matchStart = match.index;
    const matchEnd = matchStart + fullMatch.length;

    if (lastIndex < matchStart) {
      console.log("Parts: ", parts)
      parts.push(text.slice(lastIndex, matchStart));
      console.log("Parts after lastIndex < matchStart: ", parts)
    }

    parts.push(
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="break-words underline underline-offset-2 text-blue"
        key={linkUrl}
        href={linkUrl}
      >
        {linkText}
      </Link>
    );

    console.log("Parts after linkText: ", parts)

    lastIndex = matchEnd;

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
  }

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>{part}</React.Fragment>
      ))}
    </>
  );
};

export default MarkdownLite;
