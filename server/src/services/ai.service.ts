import groq from "../config/groq.js";

export const generateQuestionPaper = async (prompt: string) => {
    const response = await groq.chat.completions.create({
        model: "meta-llama/llama-4-scout-17b-16e-instruct",

        messages: [
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.2,
    });
    return response.choices[0].message.content;
};
