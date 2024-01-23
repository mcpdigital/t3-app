import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
// É OBRIGATORIO COLOCAR O NOME POST NA FUNCAO ASYNC
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt;
    const image = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      response_format: "url",
      size: "1792x1024",
    });
    const image_url = image.url;
    console.log("IMAGE URL IS:", image_url);
    // É OBRIGATORIO RETORNAR UM RESPONSE OU NEXTRESPONSE DE UM ROUTE.TS COM POST
    return NextResponse.json({ data: image_url });
  } catch (error) {
    console.log("DALL-E ERROR:", error);
  }
}
