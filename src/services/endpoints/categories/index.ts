import {NetworkService} from "@/services/http";
import {CategoryInterface, CreateCategory} from "@/types";

export const getCategories = () =>
  NetworkService.request<null, null, CategoryInterface[]>({
    config: {
      method: 'GET',
      url: `categories`,
    },
  });

export const createCategory = (newCategory: CreateCategory) =>
  NetworkService.request<null, CreateCategory, null>({
    config: {
      method: 'POST',
      url: `categories/create`,
      data: newCategory
    },
  });

export const updateCategory = (category: CategoryInterface) =>
  NetworkService.request<null, CategoryInterface, null>({
    config: {
      method: 'PUT',
      url: `categories/${category.id}/update`,
      data: category
    },
  });