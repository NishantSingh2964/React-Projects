import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, // ✅ works in Vite
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
  try {
    const res = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    return res.data.choices[0].text.trim();
  } catch (error) {
    console.error("Error calling OpenAI API:", error.message);
    throw error;
  }
}
