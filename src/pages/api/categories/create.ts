import fs from "fs";
import {CategoryInterface} from "@/types";
import {extractFileData} from "@/utils/extract-file-data";
import {categoriesFilePath} from "@/pages/api/categories/index";
import {NextApiRequest, NextApiResponse} from "next";

function getNextCategoryId(categories: CategoryInterface[]) {
  const maxId = categories.reduce((max, category) => {
    return category.id > max ? category.id : max;
  }, 0);
  return maxId + 1;
}

export default function createCategory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { categoryName = 'Unknown' } = req.body;

  if (!categoryName) {
    res.status(400).json({ message: "Category name is required" });
    return;
  }

  try {
    const categoriesData = extractFileData(categoriesFilePath, {categories: []})

    const nextCategoryId = getNextCategoryId(categoriesData.categories);

    const newCategory: CategoryInterface = {
      id: nextCategoryId,
      name: categoryName,
      tasks: [],
    };

    categoriesData.categories.push(newCategory);
    fs.writeFileSync(categoriesFilePath, JSON.stringify(categoriesData));

    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({message: "Error creating category and task"});
  }
}