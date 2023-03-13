import axios from "axios";

export const fetchData = async (input: string) => {
  const API_KEY = "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";
  const model = "text-davinci-002";
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: `Complete this sentence: "${input}"`,
      model: model,
      max_tokens: 50,
      n: 1,
      stop: ".",
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text;
};
