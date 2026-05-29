import { useState } from "react";
import { genders } from "../data/genders";

const ButtonGroup = () => {
  const [active, setActive] = useState("male");
  return (
    <div className="flex items-center justify-center gap-4">
      {genders.map((gender, index) => (
        <button
          key={index}
          className={`capitalize border cursor-pointer border-brand text-brand py-2.5 px-4 rounded-sm ${active === gender ? "bg-brand text-white" : ""}`}
          onClick={() => setActive(gender)}
        >
          {gender}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
