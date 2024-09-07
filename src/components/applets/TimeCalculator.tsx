import { Container } from "../common/Container";

const TimeCalculatorApplet = () => {
  return <section>TimeCalculator</section>;
};

export const TimeCalculator = () => (
  <Container
    appletIcon="🕒"
    appletTitle="Time Calculator"
    appletDescription="This applet allows you to add/subtract time in minutes/hours from a given time."
  >
    <TimeCalculatorApplet />
  </Container>
);
