"use client"

import { FC, HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import TextareaAutosize from "react-textarea-autosize";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";

interface ChatInputProps extends HTMLAttributes<HTMLDivElement> {}

const ChatInput: FC<ChatInputProps> = ({ className, ...props }) => {
  const [input, setInput] = useState<string>("");

  const { mutate: sendMessage, isLoading} = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ messages: [message] })
      })

      return response.body
    },
    onSuccess: async (stream) => {
      if(!stream) throw new Error('Stream is not found') 

      const reader = stream.getReader()
      const decoder = new TextDecoder()
      let done = false

      while (!done) {
        const { value, done: doneReading} = await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)
        console.log(chunkValue)
      }
    }
  })

  return (
    <div {...props} className={cn("border-t border-gray-700", className)}>
      <div className="relative mt-4 flex-1 overflow-hidden rounded-lg border-none outline-none">
        <TextareaAutosize
          rows={2}
          maxRows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()

              const message = {
                id: nanoid(),
                isUserMessage: true, 
                text: input
              }

              sendMessage(message)
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
