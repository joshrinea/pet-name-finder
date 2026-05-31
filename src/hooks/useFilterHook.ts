import { useMemo } from "react";
import type { Name } from "../interface/Name";

interface UseFilterHookProps {
  items: Name[];
  selectedCategories: string[];
  selectedGender: string | null;
  selectedLetter: string | null;
}

export const useFilterHook = ({
  items,
  selectedCategories,
  selectedGender,
  selectedLetter,
}: UseFilterHookProps) => {
  const filteredItems = useMemo(() => {
    let result = [...items];

    if (selectedCategories.length > 0) {
      result = result.filter((name) =>
        name.categories.some((categoryId) =>
          selectedCategories.includes(categoryId),
        ),
      );
    }

    if (selectedGender !== "both") {
      result = result.filter((name) =>
        selectedGender === "male"
          ? name.gender.includes("M")
          : name.gender.includes("F"),
      );
    }

    if (selectedLetter) {
      result = result.filter((name) =>
        name.title.toLowerCase().startsWith(selectedLetter.toLowerCase()),
      );
    }

    return result.sort((a, b) => a.title.localeCompare(b.title));
  }, [items, selectedCategories, selectedGender, selectedLetter]);

  return filteredItems;
};
