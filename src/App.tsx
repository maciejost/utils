import { initTabListener } from "@fremtind/jkl-core";
import { TimeCalculator } from "./components/applets/TimeCalculator";
import { AnalogClock } from "./components/applets/AnalogClock";
import { Base64Handler } from "./components/applets/Base64Handler";
import { HexToRGB } from "./components/applets/HextToRGB";

function App() {
  initTabListener();

  return (
    <main className="px-16">
      <section
        className="flex flex-col gap-24 justify-center md:py-24 md:px-40 py-24 px-24 rounded-lg mt-64 max-w-[40rem] mx-auto bg-background-container"
        data-theme="dark"
      >
        <h1 data-theme="dark" className="text-center title text-text-default">
          Maciejs Utils
        </h1>
        <p className=" text-text-default mx-auto" data-theme="dark">
          A collection of applets, based on the frustration of having to scour
          Google for that one util I used a couple of years ago, that I can't
          find anymore.
        </p>
      </section>
      <section className="mt-40 md:mt-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-24 gap-y-32 max-w-[1440px] mx-auto">
        <TimeCalculator />
        <AnalogClock />
        <Base64Handler />
        <HexToRGB />
      </section>
    </main>
  );
}

export default App;
