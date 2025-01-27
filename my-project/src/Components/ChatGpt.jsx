import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: "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",
//   dangerouslyAllowBrowser: true,
// });

export const callChatGPT  = async (userMessage) => {
  if (!userMessage.trim()) return; // Ignore empty messages

  try {
    const result = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Replace with the appropriate model
      messages: [{ role: "user", content: userMessage }],
    });

    console.log("AI Response:", result.choices[0].message.content);
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response?.data || error.message);
  }
};
