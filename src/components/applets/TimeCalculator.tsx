import { useState } from "react";
import { Container } from "../common/Container";

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
    <section className="">
      <div>
        <label htmlFor="initTime" className="block">
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
        <div>
          <label htmlFor="operator" className="block">
            Add/Subtract
          </label>
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
            id="operator"
            name="operator"
            className="block"
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
          </select>
        </div>
        <div className="w-fit">
          <label htmlFor="hours" className="block">
            Hours
          </label>
          <input
            type="number"
            id="hours"
            name="hours"
            min="0"
            required
            className="block w-fit"
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="minutes" className="block">
            Minutes
          </label>
          <input
            type="number"
            id="minutes"
            name="minutes"
            min="0"
            required
            className="block w-fit"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
        </div>
      </div>
      {(hours !== 0 || minutes !== 0) && (
        <div>
          <p className="block">New time</p>
          <time>
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
