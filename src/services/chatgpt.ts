import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
});

const createShoppingSession = async (): Promise<string> => {
  try {
    const thread = await openai.beta.threads.create();
    return thread.id;
  } catch (e) {
    console.log(e);
    return "";
  }
};

const addUserMessageToThread = async (id: string, msgContent: string) => {
  try {
    const message = await openai.beta.threads.messages.create(id, {
      role: "user",
      content: msgContent,
    });
  } catch (e) {
    console.log(e);
  }
};
