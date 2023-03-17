import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import {CategoryInterface} from "@/types";
import {extractFileData} from "@/utils/extract-file-data";
import {categoriesFilePath} from "@/pages/api/categories";

type CategoriesData = {
  categories: CategoryInterface[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const {id} = req.query;
    const {name} = req.body;

    const currentCategoriesData: CategoriesData = extractFileData(categoriesFilePath, {categories: []});

    const categoryToUpdate = currentCategoriesData.categories.find(
      (category) => category.id === Number(id)
    );

    if (!categoryToUpdate) {
      res.status(404).end();
      return;
    }

    const updatedCategories = currentCategoriesData.categories.map((category) => {
      if (category.id === Number(id)) {
        return {
          ...category,
          name: name || category.name,
        };
      }
      return category;
    });

    const updatedCategoriesData = {tasks: updatedCategories};
    fs.writeFileSync(categoriesFilePath, JSON.stringify(updatedCategoriesData));

    res.status(200).json(updatedCategoriesData);
  } else {
    res.status(405).end();
  }
}