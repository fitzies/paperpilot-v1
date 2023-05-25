import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API,
});

const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  const res = await request.json();

  let messages: ChatCompletionRequestMessage[] = [
    {
      role: "system",
      content: "You are Quillbot, you paraphrase the text that I give you.",
    },
    {
      role: "user",
      content: res.data,
    },
  ];

  const chatGPT = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  const chatGPTMessage = chatGPT.data.choices[0].message?.content;

  return NextResponse.json({ chatGPTMessage });
}
