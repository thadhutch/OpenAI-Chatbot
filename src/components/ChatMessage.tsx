"use client";

import { MessagesContext } from "@/context/messages";
import { FC, HTMLAttributes, useContext } from "react";
import { cn } from "@/lib/utils";
import MarkdownLite from "./MarkdownLite";

interface ChatMessageProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessage: FC<ChatMessageProps> = ({ className, ...props }) => {
  const { messages } = useContext(MessagesContext);
  const inverseMessages = [...messages].reverse();

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {inverseMessages.map((message) => (
        <div key={message.id} className="chat-message">
          <div
            className={cn("flex items-end", {
              "justify-end": message.isUserMessage,
            })}
          >
            <div
              className={cn(
                "flex flex-col space-y-2 ext-sm max-w-xs mx-2 overflow-x-hidden",
                {
                  "order-1 items-start": message.isUserMessage,
                  "order-2 items-end": !message.isUserMessage,
                }
              )}
            >
              <p
                className={cn("px-4 py-2 rounded-lg", {
                  "bg-blue-600 text-white": message.isUserMessage,
                  "bg-gray-600 text-white": !message.isUserMessage,
                })}
              >
                <MarkdownLite text={message.text} />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;
