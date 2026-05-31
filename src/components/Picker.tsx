import React from "react";
import { letters } from "../data/letters";

type PickerProps = {
  filteredLetter: string | null;
  setFilteredLetter: React.Dispatch<React.SetStateAction<string | null>>;
};

const Picker = ({ filteredLetter, setFilteredLetter }: PickerProps) => {
  const handleClick = (letter: string) => {
    console.log(letter);
    setFilteredLetter((prev) => (prev === letter ? null : letter));
  };

  return (
    <div
      className="flex flex-row items-center justify-between w-full bg-white p-2 rounded-full"
      style={{
        boxShadow:
          "0 2px 12px 0 rgba(58, 53, 51, 0.10), 0 0 2px 0 rgba(58, 53, 51, 0.20)",
      }}
    >
      {letters.map((letter, index) => (
        <button
          key={index}
          className={`w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded-full cursor-pointer font-normal text-sm lg:text-base ${letter === filteredLetter ? "bg-brand text-white" : "text-text-neutral-dark"}`}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Picker;
