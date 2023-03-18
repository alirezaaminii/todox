import { Configuration, OpenAIApi } from "openai";
import {NextApiRequest, NextApiResponse} from "next";
import {splitItems} from "@/utils/split-items";
import {getAPIBaseURL} from "@/utils/env";
import {capitalize} from "@/utils/capitalize";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }

  const description = req.body.description || '';
  if (description.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid input",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(description),
      temperature: 0.6,
    });
    const results: string[] = splitItems(completion.data.choices[0].text ?? '');
    results.map(async (categoryName) => {
      await fetch(`${getAPIBaseURL()}categories/create`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({categoryName: capitalize(categoryName)}),
      })
    })
    res.status(200).json({ message: 'Categories created successfully' });
  } catch(error: any) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

function generatePrompt(description: string) {
  return `Suggest three categories for handling tasks based on the below information, categories must be less than 35 characters.

Description: Preparing for party
Categories: buying snacks, foods, cleaning the tables
Description: ${description}
Categories:`;
}
