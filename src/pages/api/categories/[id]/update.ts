import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import {CategoryInterface} from "@/types";

type CategoriesData = {
  categories: CategoryInterface[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const {id} = req.query;
    const {name} = req.body;
    const filePath = path.join(process.cwd(), 'src/pages/api/categories/categories.json');

    const currentCategoriesData: CategoriesData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      : {categories: []};

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
    fs.writeFileSync(filePath, JSON.stringify(updatedCategoriesData));

    res.status(200).json(updatedCategoriesData);
  } else {
    res.status(405).end();
  }
}