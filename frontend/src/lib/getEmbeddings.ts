// lib/embedding.ts
import { OpenAI } from 'openai';
import dotenv from 'dotenv'


dotenv.config({
  path:'../../.env'
})


const openai = new OpenAI({
  apiKey: process.env.FOCUSFLOW_KEY,
});

export async function getEmbedding(text:string) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });

  return response.data[0].embedding;
}