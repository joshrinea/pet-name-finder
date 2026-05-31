import React, { useEffect, useMemo, useState } from "react";
import type { Categories } from "../interface/Categories";
import { categoryService } from "../services/CategoryService";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type PanelBarProps = {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
};

const PanelBar = ({
  selectedCategories,
  setSelectedCategories,
}: PanelBarProps) => {
  const [categories, setCategories] = useState<Categories>({
    data: [],
    filterGroups: [],
  });

  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(
    null,
  );

  const getCategories = async () => {
    try {
      const res = await categoryService.getCategories();
      setCategories(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleExpandClick = (id: string) => {
    setExpandedCategoryId((prev) => (prev === id ? null : id));
  };

  const categoryMap = useMemo(
    () =>
      Object.fromEntries(
        categories.data.map((category) => [category.id, category]),
      ),
    [categories.data],
  );

  return (
    <div className="hidden md:flex flex-col bg-white">
      <div className="w-full border-b border-t border-[#C9C5B9] px-2">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <span className="text-text-neutral-dark font-medium text-xs lg:text-sm">
            Filters:
          </span>
          <div className="w-full flex items-center justify-between border-r border-l border-[#C9C5B9]">
            {categories.filterGroups.map((category, index) => {
              const isActive = expandedCategoryId === category.id;

              return (
                <button
                  key={index}
                  className={`relative px-2 py-2.5 text-xs lg:text-sm font-light text-text-neutral-dark cursor-pointer flex items-center ${isActive ? "border-r border-t border-l border-b-white border-brand" : "border-r border-t border-l border-transparent"}`}
                  onClick={() => handleExpandClick(category.id)}
                >
                  <span>{category.label}</span>
                  {isActive ? (
                    <FiChevronUp className="text-brand text-lg lg:text-2xl" />
                  ) : (
                    <FiChevronDown className="text-brand text-lg lg:text-2xl" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {expandedCategoryId && (
        <div className="w-full max-w-6xl mx-auto px-2 flex gap-4 py-4">
          {categories.filterGroups
            .find((x) => x.id === expandedCategoryId)
            ?.categoryIds.map((categoryId) => {
              const category = categoryMap[categoryId];

              if (!category) return null;
              return (
                <label
                  key={category.id}
                  className="flex items-center gap-2 cursor-pointer w-fit"
                >
                  <input
                    type="checkbox"
                    className="appearance-none border-[1.5px] border-brand h-3.5 w-3.5 checked:bg-brand checked:appearance-auto accent-brand"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => {
                      setSelectedCategories((prev) =>
                        prev.includes(category.id)
                          ? prev.filter((id) => id !== category.id)
                          : [...prev, category.id],
                      );
                    }}
                  />
                  <span className="font-light text-xs lg:text-sm 2xl:text-base">
                    {category.name}
                  </span>
                </label>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default PanelBar;
