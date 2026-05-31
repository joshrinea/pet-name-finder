import React from "react";
import { genders } from "../data/genders";

type ButtonGroupProps = {
  filteredGender: string;
  setFilteredGender: React.Dispatch<React.SetStateAction<string>>;
};

const ButtonGroup = ({
  filteredGender,
  setFilteredGender,
}: ButtonGroupProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {genders.map((gender, index) => (
        <button
          key={index}
          className={`capitalize border cursor-pointer border-brand text-brand py-1.5 px-3 rounded-sm ${filteredGender === gender ? "bg-brand text-white" : ""}`}
          onClick={() => setFilteredGender(gender)}
        >
          {gender}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
