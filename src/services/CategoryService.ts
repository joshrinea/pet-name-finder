import type { Categories } from "../interface/Categories";

export const categoryService = {
  async getCategories(): Promise<Categories> {
    const response = await fetch("/categories.json");
    if (!response.ok) {
      throw new Error(`Failed to fetch Categories: ${response.status}`);
    }
    return response.json();
  },
};
