"use client";

import { FC, HTMLAttributes, useState, useContext, useRef } from "react";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";
import { MessagesContext } from "@/context/messages";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const textAreaRef = useRef<null | HTMLTextAreaElement>(null)

  const { mutate: sendMessage, isLoading } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [message] }),
      });

      return response.body;
    },
    // this adds the user message to the component
    onMutate(message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("Stream is not found");

      const id = nanoid()
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: '',
      }

      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prevText) => prevText + chunkValue);
      }

      setIsMessageUpdating(false);
      setInput("");

      // Give a slight timeout to focus on the textarea once message is done loading
      setTimeout(() => {
        textAreaRef.current?.focus()
      }, 10)
    },
  });

  return (
    <div {...props} className={cn("border-t border-gray-700", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
        ref={textAreaRef}
          rows={2}
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
          autoFocus
          placeholder="Write a message..."
          className="peer disabled:opacity-50 pr-14 p-1 pl-2 resize-none block w-full border-0 bg-gray-700 text-zinc-100 focus:ring-0 focus:outline text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default ChatInput;
