import {useQuery} from "react-query";
import {getCategories} from "@/services/endpoints/categories";

export function useCategories() {
  return useQuery(['categories'], () => getCategories(), {
    select: (res) => res.data,
  });
}