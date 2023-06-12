import { MessageArraySchema } from "@/lib/validators/message";
import {
  ChatGPTMessage,
  OpenAIStreamPayload,
  OpenAIStream,
} from "@/lib/openai-stream";
import { chatbotPrompt } from "@/app/helpers/constants/chatbot-prompt";


export async function POST(req: Request) {
  const { messages } = await req.json();

  const parsedMessages = MessageArraySchema.parse(messages);

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserMessage ? "user" : "system",
    content: message.text,
  }));

  outboundMessages.unshift({
    role: "system",
    content: chatbotPrompt,
  });

  // Go to OpenAI documentation to read more about these parameters
  const payload: OpenAIStreamPayload = {
    model: "gpt-3.5-turbo", // Not using 4 because it's slower and there's not alot of reasoning
    messages: outboundMessages,
    temperature: 0.4, // How creative the AI will be
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 150, // Roughly 150 word max
    stream: true,
    n: 1,
  };

  const stream = await OpenAIStream(payload);
  console.log("Stream: ", stream);
  return new Response(stream);
}
