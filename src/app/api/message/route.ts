import { MessageArraySchema } from "@/lib/validators/message"
import { ChatGPTMessage } from "@/lib/openai-stream"

export async function POST(req: Request) {
  const { messages } = await req.json()

  const parsedMessages = MessageArraySchema.parse(messages)

  const outboundMessages: ChatGPTMessage[] = parsedMessages.map((message) => ({
    role: message.isUserMessage ? 'user' : 'system',
    content: message.text, 
  }))

  outboundMessages.unshift({
    role: 'system',
    content: chatbotPropmt
  })
}