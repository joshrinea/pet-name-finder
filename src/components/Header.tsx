import { useEffect, useState } from "react";
import ButtonGroup from "./ButtonGroup";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export interface Data {
  id: string;
  name: string;
  description: string;
}

export interface FilterGroup {
  id: string;
  label: string;
  categoryIds: string[];
}

export interface Model {
  data: Data[];
  filterGroups: FilterGroup[];
}

const Header = () => {
  const [categories, setCategories] = useState<Model>({
    data: [],
    filterGroups: [],
  });
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([]);
  const [expanded, setExpanded] = useState<String>();

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data: Model) => {
        setCategories(data);
        setFilterGroups(data.filterGroups);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(categories);
  console.log(filterGroups);

  return (
    <header className="w-full fixed top-0 left-0 pt-5 pb-5">
      <div className="text-center mb-10">
        <h3 className="font-normal text-2xl mb-6">Choose your pet's gender</h3>
        <ButtonGroup />
      </div>
      <div className="w-full bg-white flex relative border-t border-b border-[#C9C5B9]">
        <div className="absolute text-en">
          <p>Filters:</p>
        </div>
        <div className="flex flex-row items-center justify-center mx-auto w-fit">
          {filterGroups.map((group, index) => (
            <button
              key={index}
              className="py-5 px-5 cursor-pointer text-text-neutral-dark font-light text-base leading-6 tracking-normal flex items-center justify-center gap-2.5"
              onClick={() => setExpanded(group.id)}
            >
              <span>{group.label}</span>
              {
                group.id === expanded ? <FiChevronUp className="text-brand" /> : <FiChevronDown className="text-brand" />
              }
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
