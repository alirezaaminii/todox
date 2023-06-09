import {useMutation, useQuery} from "react-query";
import {createCategory, generateCategories, getCategories, updateCategory} from "@/services/endpoints/categories";
import {CategoryInterface, CreateCategory} from "@/types";

export function useCategories() {
  return useQuery(['categories'], () => getCategories(), {
    select: (res) => res.data,
  });
}
export function useCreateCategory() {
  return useMutation([], (newCategory: CreateCategory) => createCategory(newCategory));
}

export function useUpdateCategory() {
  return useMutation([], (category: CategoryInterface) => updateCategory(category));
}

export function useGenerateCategories() {
  return useMutation([], (description: string) => generateCategories(description));
}