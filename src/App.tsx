import { initTabListener } from "@fremtind/jkl-core";
import { TimeCalculator } from "./components/applets/TimeCalculator";

function App() {
  initTabListener();

  return (
    <main className="px-16">
      <section
        className="flex flex-col gap-24 justify-center py-24 px-40 rounded-lg mt-64 max-w-[40rem] mx-auto bg-background-container"
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
      <section>
        <TimeCalculator />
      </section>
    </main>
  );
}

export default App;
