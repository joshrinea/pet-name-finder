import "./App.css";
import Model from "./assets/images/model.png";
import Header from "./components/Header";
import Picker from "./components/Picker";

function App() {
  return (
    <>
      <Header />
      <div className="relative w-full h-screen overflow-hidden">

        <div className="w-full h-full flex flex-col items-center justify-center pt-10 md:pt-0">
          <div className="mb-20">
            <Picker />
          </div>
          <div className="max-w-[1184] pb-20 md:pb-0">
            <h1 className="text-brand font-bold uppercase text-center text-[80px] leading-20 md:text-[160px] md:leading-37.5 lg:text-[240px] lg:leading-57.5">
              I need <br /> a name
            </h1>
          </div>
        </div>

        <img
          src={Model}
          alt="Puppy"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3xs md:w-80 lg:w-100 z-10 object-contain"
        />
      </div>
    </>
  );
}

export default App;
