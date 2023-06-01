"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/Accordion";
import { FC } from "react";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";

const Chat: FC = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="relative bg-white z-40 shadow"
    >
      <AccordionItem value="item-1">
        <div className="fixed right-8 w-80 bottom-8 bg-gray-800 border-gray-700 rounded-md overflow:hidden">
          <div className="w-full h-full flex flex-col">
            <AccordionTrigger className="px-6 py-4 border-b border-zinc-300">
              <ChatHeader />
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col h-80">
                <ChatMessage className="px-2 py-3 flex-1"/>
                <ChatInput className="px-4"/>
              </div>
            </AccordionContent>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default Chat;
