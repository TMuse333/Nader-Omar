
import { buildAgentPrompt } from '@/lib/buildPrompt';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.FOCUSFLOW_KEY!,
});

export async function POST(request: Request) {
  try {
    const { prompt: userInput } = await request.json();

    // Build context prompt from tasks
    const basePrompt = buildAgentPrompt();

    console.log('base prompt',basePrompt)

    // Compose messages for the chat model
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      { role: 'system', content: basePrompt },
      { role: 'user', content: userInput },
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
    });

    const reply = completion.choices[0].message?.content || '';

    console.log('Prompt:', messages);
console.log('OpenAI reply:', reply);

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('OpenAI error:', error);
    return new Response(JSON.stringify({ error: 'Failed to get response' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}