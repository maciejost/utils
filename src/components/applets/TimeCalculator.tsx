import { useState } from "react";
import { Container } from "../common/Container";
import { Select } from "@fremtind/jkl-select-react";
import { TextInput } from "@fremtind/jkl-text-input-react";

const howManyDaysFromInitial = (initialTime: Date, newTime: Date) => {
  const ONE_DAY = 24 * 60 * 60 * 1000;

  const dateOnlyInitial = new Date(initialTime.toDateString());
  const dateOnlyNewTime = new Date(newTime.toDateString());

  const diffInTime = dateOnlyNewTime.getTime() - dateOnlyInitial.getTime();
  const diffInDays = Math.round(diffInTime / ONE_DAY);

  if (diffInDays === 0) return "";
  if (diffInDays > 0) return `(+${diffInDays} days)`;

  return `(${diffInDays} days)`;
};

const TimeCalculatorApplet = () => {
  const [operator, setOperator] = useState("add");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const [time, setTime] = useState(
    new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1"),
  );

  const initialTime = new Date(`01/01/2021 ${time}`);

  const newTime = new Date(
    initialTime.getTime() +
      (operator === "add" ? 1 : -1) *
        (hours * 60 * 60 * 1000 + minutes * 60 * 1000),
  );

  const result = newTime.toLocaleTimeString().replace(/(.*)\D\d+/, "$1");

  const resultDay = howManyDaysFromInitial(initialTime, newTime);

  return (
    <section className="flex flex-col gap-16">
      <div>
        <label htmlFor="initTime" className="block font-bold">
          Choose the initial time
        </label>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="time"
          id="initTime"
          name="appt"
          min="09:00"
          max="18:00"
          required
        />
      </div>
      <div className="flex gap-24">
        <Select
          label="Add/Subtract"
          className="max-w-[10rem] w-fit"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
          id="operator"
          name="operator"
          labelProps={{
            variant: "medium",
            className: "font-bold",
          }}
          items={[
            { value: "add", label: "Add" },
            { value: "subtract", label: "Subtract" },
          ]}
        />

        <TextInput
          label="Hours"
          className="max-w-[72px]"
          labelProps={{
            variant: "medium",
            className: "font-bold",
          }}
          type="number"
          id="hours"
          name="hours"
          min="0"
          required
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />

        <TextInput
          label="Minutes"
          className="max-w-[72px]"
          labelProps={{
            variant: "medium",
            className: "font-bold",
          }}
          type="number"
          id="minutes"
          name="minutes"
          min="0"
          required
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
      </div>

      {(hours !== 0 || minutes !== 0) && (
        <div className="heading-3">
          <p className="font-bold">New time</p>
          <time className="font-normal">
            {result} {resultDay}
          </time>
        </div>
      )}
    </section>
  );
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
