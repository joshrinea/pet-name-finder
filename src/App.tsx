import { useEffect, useState } from "react";
import Model from "./assets/images/model.png";
import Model2 from "./assets/images/model2.png";
import ButtonGroup from "./components/ButtonGroup";
import Picker from "./components/Picker";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import PanelBar from "./components/PanelBar";
import type { NamesData } from "./interface/Names";
import { namesService } from "./services/NamesService";
import { useFilterHook } from "./hooks/useFilterHook";
import Details from "./components/Details";

function App() {
  const [filteredGender, setFilteredGender] = useState("both");
  const [filteredLetter, setFilteredLetter] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const [selectedNameIndex, setSelectedNameIndex] = useState<number>(0);

  const [names, setNames] = useState<NamesData>({
    data: [],
  });

  const getNamesAsync = async () => {
    try {
      const data = await namesService.getNames();
      setNames(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNamesAsync();
  }, []);

  useEffect(() => {
    console.log(names);
  }, [names]);

  console.log(selectedCategories);

  const filteredNames = useFilterHook({
    items: names.data,
    selectedCategories: selectedCategories,
    selectedGender: filteredGender,
    selectedLetter: filteredLetter,
  });

  const selectedName = filteredNames[selectedNameIndex];
  const visibleItems = filteredNames.slice(
    Math.max(0, selectedNameIndex - 3),
    selectedNameIndex + 4,
  );

  return (
    <>
      <main className="w-full h-screen relative">
        <header className="relative h-1/6 px-2">
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h3 className="font-normal text-2xl mb-4 leading-relaxed text-center">
              Choose your pet's gender
            </h3>
            <ButtonGroup
              filteredGender={filteredGender}
              setFilteredGender={setFilteredGender}
            />
          </div>
        </header>
        <div className="mt-4">
          <PanelBar
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        </div>
        <div className="mt-4 max-w-6xl mx-auto px-2">
          <h3 className="text-text-neutral-dark text-start text-xl lg:text-2xl 2xl:text-3xl font-normal tracking-normal mb-4">
            All pets names
          </h3>
          <Picker
            filteredLetter={filteredLetter}
            setFilteredLetter={setFilteredLetter}
          />
        </div>
        {!filteredLetter && (
          <div className="max-w-6xl mx-auto pt-10">
            <div className="max-w-[1184] pb-20 md:pb-0">
              <h1 className="text-brand font-bold uppercase text-center text-5xl md:text-9xl">
                I need <br /> a name
              </h1>
            </div>
            <img
              src={Model}
              alt="Puppy"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3xs 2xl:w-sm z-10 object-contain"
            />
          </div>
        )}
        {filteredLetter && (
          <>
            <div className="grid grid-cols-2 max-w-6xl mx-auto px-2 relative py-5">
              <div className="flex items-center justify-center bg-red-800/20">
                <div className="w-3xs bg-red-800/10">
                  <img
                    src={Model2}
                    alt="Model"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-blue-500/10">
                <div className="w-1/2 flex flex-col items-center">
                  <button
                    onClick={() =>
                      setSelectedNameIndex((prev) => Math.max(0, prev - 1))
                    }
                    disabled={selectedNameIndex === 0}
                  >
                    <FiChevronUp className="text-brand text-3xl" />
                  </button>

                  <div className="flex flex-col items-center">
                    {visibleItems.length ? (
                      visibleItems.map((name) => {
                        const isActive = name.id === selectedName?.id;

                        return (
                          <button
                            key={name.id}
                            onClick={() => {
                              const index = filteredNames.findIndex(
                                (x) => x.id === name.id,
                              );

                              setSelectedNameIndex(index);
                            }}
                            className={`
              transition-all duration-300
              font-serif
              leading-tight
              ${isActive ? "text-brand text-6xl" : "text-gray-400 text-4xl"}
            `}
                          >
                            {name.title}
                          </button>
                        );
                      })
                    ) : (
                      <p>No Paw-fect Match Yet</p>
                    )}
                  </div>

                  <button
                    onClick={() =>
                      setSelectedNameIndex((prev) =>
                        Math.min(filteredNames.length - 1, prev + 1),
                      )
                    }
                    disabled={selectedNameIndex === filteredNames.length - 1}
                  >
                    <FiChevronDown className="text-brand text-3xl" />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 right-0">
                {filteredNames.length}
                Total Items
              </div>
              <div>
                <Details data={selectedName || null} />
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
