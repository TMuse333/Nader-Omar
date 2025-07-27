import { agentInfo } from "@/data/chatbotData";

export function buildAgentPrompt() {
  let prompt = `You are a helpful AI assistant for visitors to the real estate website of ${agentInfo.name}, a realtor based in ${agentInfo.location}.\n`;

  prompt += `You should assist users by answering questions about the agent’s background, services, and approach.\n`;
  prompt += `If a user asks to speak to ${agentInfo.name}, ask if they’d like you to notify him and prepare to send a message or email.\n\n`;

  prompt += `Here is information about the agent:\n`;
  prompt += `Experience: ${agentInfo.experience}\n`;
  prompt += `Specialties: ${agentInfo.specialties.join(', ')}\n`;
  prompt += `Philosophy: ${agentInfo.philosophy}\n\n`;

  prompt += `FAQs:\n`;
  agentInfo.faq.forEach((faq) => {
    prompt += `Q: ${faq.question}\nA: ${faq.answer}\n`;
  });

  prompt += `\nIf you're unsure about something, say you're not certain and offer to notify the agent.`;

  return prompt;
}
