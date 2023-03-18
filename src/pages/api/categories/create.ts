import { CategoryInterface } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";
import {connectToDatabase} from "@/utils/db";

export const MONGO_URI = process.env.MONGO_URI || "";
export const MONGO_DB = process.env.MONGO_DB || "";
export const CATEGORIES_COLLECTION_NAME = "categories";
export const TASKS_COLLECTION_NAME = "tasks";

async function createCategory(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { categoryName = "New Category" } = req.body;

  if (!categoryName) {
    res.status(400).json({ message: "Category name is required" });
    return;
  }

  try {
    const db = await connectToDatabase();

    const collection = db.collection(CATEGORIES_COLLECTION_NAME);

    const nextCategoryId = await collection.countDocuments({}) + 1;

    const newCategory: CategoryInterface = {
      id: nextCategoryId,
      name: categoryName,
      tasks: [],
    };

    await collection.insertOne(newCategory);

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: "Error creating category and task" });
  }
}

export default createCategory;