import { useState } from "react";
import { letters } from "../data/letters";

const Picker = () => {
  const [selectedLetter, setSelectedLetter] = useState("A");

  return (
    <div
      className="flex flex-row items-center justify-center gap-1 w-277.25 bg-white p-4 rounded-full"
      style={{
        boxShadow:
          "0 2px 12px 0 rgba(58, 53, 51, 0.10), 0 0 2px 0 rgba(58, 53, 51, 0.20)",
      }}
    >
      {letters.map((letter, index) => (
        <div
          key={index}
          className={`w-9.25 h-9.25 flex items-center justify-center rounded-full cursor-pointer ${letter === selectedLetter ? "bg-brand text-white" : ""}`}
          onClick={() => setSelectedLetter(letter)}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default Picker;
