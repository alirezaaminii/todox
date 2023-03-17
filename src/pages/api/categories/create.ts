import fs from "fs";
import {CategoryInterface} from "@/types";
import {extractFileData} from "@/utils/extract-file-data";
import {categoriesFilePath} from "@/pages/api/categories/index";

function getNextCategoryId(categories: CategoryInterface[]) {
  const maxId = categories.reduce((max, category) => {
    return category.id > max ? category.id : max;
  }, 0);
  return maxId + 1;
}

export default function createCategory(categoryName: string) {
  if (!categoryName) {
    throw ({message: "Category name is required"});
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

    return newCategory
  } catch (error) {
    console.log(error);
    throw ({message: "Error creating category and task"});
  }
}