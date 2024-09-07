import { useEffect, useState } from "react";
import { Container } from "../../common/Container";
import "./style.css";

const Clock = () => {
  useEffect(() => {
    const time = document.querySelector(".hours")! as HTMLElement;
    const secHand = document.querySelector(".second")! as HTMLElement;
    const minHand = document.querySelector(".minute")! as HTMLElement;
    const hourHand = document.querySelector(".hour")! as HTMLElement;

    for (let i = 1; i <= 60; i++) {
      if (i % 5 == 0) {
        time.innerHTML +=
          "<div class='hour-number'><div>" + i / 5 + "</div></div>";
        const hours = document.getElementsByClassName(
          "hour-number",
        )! as HTMLCollectionOf<HTMLElement>;
        hours[hours.length - 1].style.transform =
          `translateX(-50%) rotate(${i * 6}deg)`;
        const firstChild = hours[hours.length - 1].firstChild! as HTMLElement;
        firstChild.style.transform = `rotate(${i * -6}deg)`;
      } else {
        time.innerHTML += "<div class='minute-bar'></div>";
        const bars = document.getElementsByClassName("minute-bar")!;
        const lastBar = bars[bars.length - 1]! as HTMLElement;
        lastBar.style.transform = `translateX(-50%) rotate(${i * 6}deg)`;
      }
    }

    function startClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secDeg = seconds * (360 / 60) + minutes * 360;
      const minDeg = minutes * (360 / 60) + seconds / 12;
      const hourDeg = hours * (360 / 12) + (minutes / 12) * (360 / 60);
      secHand!.style.transform = `translateX(-50%) rotate(${secDeg}deg)`;
      minHand!.style.transform = `translateX(-50%) rotate(${minDeg}deg)`;
      hourHand!.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    }
    setInterval(startClock, 1000);
    startClock();
  }, []);

  return (
    <div className="w-full sm:w-[unset] sm:mx-0 mx-auto flex justify-center">
      <div className="clock-body">
        <div className="hours"></div>
        <div className="disc disc-top"></div>
        <div className="disc disc-bottom"></div>
        <div className="hand second"></div>
        <div className="hand minute"></div>
        <div className="hand hour"></div>
      </div>
    </div>
  );
};

const AnalogClockApplet = () => {
  const [timeNow, setTimeNow] = useState(new Date().toLocaleTimeString());
  const [dateNow, setDateNow] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setInterval(() => {
      setTimeNow(new Date().toLocaleTimeString());
      setDateNow(new Date().toLocaleDateString());
    }, 1000);
  }, []);

  return (
    <section className="flex flex-wrap gap-x-64 gap-y-24 mt-40 px-24 md:px-0 pb-24 md:pb-0">
      <Clock />
      <div className="mt-40 sm:mt-0">
        <p className="body font-bold">The time now is</p>
        <time className="body">{timeNow}</time>

        <p className="body font-bold mt-24">Todays date is</p>
        <time className="body">{dateNow}</time>
      </div>
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
