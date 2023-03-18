import { Configuration, OpenAIApi } from "openai";
import { NextApiRequest, NextApiResponse } from "next";
import { splitItems } from "@/utils/split-items";
import { capitalize } from "@/utils/capitalize";
import { connectToDatabase } from "@/utils/db";
import {CATEGORIES_COLLECTION_NAME} from "@/constants";

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

  const db = await connectToDatabase();

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(description),
      temperature: 0.6,
    });

    const categories = splitItems(completion.data.choices[0].text ?? '');
    const categoryDocs = categories.map((categoryName) => ({
      name: capitalize(categoryName)
    }));

    const result = await db.collection(CATEGORIES_COLLECTION_NAME).insertMany(categoryDocs);

    res.status(200).json({ message: `Inserted ${result.insertedCount} documents.` });
  } catch(error: any) {
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