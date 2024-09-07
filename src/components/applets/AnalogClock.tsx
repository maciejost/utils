import { Container } from "../common/Container";

const Clock = () => (
  <div className="bg-background-container-high w-[300px] h-[300px] rounded-full border-clock">
    <div className="dot"></div>
    <div>
      <div className="hour-hand"></div>
      <div className="minute-hand"></div>
      <div className="second-hand"></div>
    </div>
    <div>
      <span className="h3">3</span>
      <span className="h6">6</span>
      <span className="h9">9</span>
      <span className="h12">12</span>
    </div>
    <div className="diallines"></div>
  </div>
);

const AnalogClockApplet = () => {
  return (
    <section>
      <Clock />
    </section>
  );
};

export const AnalogClock = () => (
  <Container
    appletIcon="⌚︎"
    appletTitle="Analog clock"
    appletDescription="An analog clock that shows the current time, for easier setting of watches."
  >
    <AnalogClockApplet />
  </Container>
);
