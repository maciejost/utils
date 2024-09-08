import { useState } from "react";
import { Container } from "../common/Container";
import { TextInput } from "@fremtind/jkl-text-input-react";
import { CopyButton } from "../common/Button";

function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const HexToRGBApplet = () => {
  const [hex, setHex] = useState("");
  const [rgb, setRGB] = useState("");

  return (
    <section className="flex justify-between gap-40 flex-wrap">
      <div>
        <div className="flex gap-24 items-end">
          <TextInput
            label="Hex color code"
            value={hex}
            labelProps={{
              variant: "medium",
              className: "font-bold",
            }}
            onChange={(e) => {
              setHex(e.target.value);
              const rgb = hexToRgb(e.target.value);

              if (rgb) {
                setRGB(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`);
              } else {
                setRGB("");
              }
            }}
          />

          <CopyButton
            className="h-fit py-8"
            onClick={() => {
              navigator.clipboard.writeText(hex);
            }}
          >
            Copy
          </CopyButton>
        </div>
        <div className="mt-24 flex gap-24 items-end">
          <TextInput
            className=""
            label="RGB color code"
            value={rgb}
            labelProps={{
              variant: "medium",
              className: "font-bold",
            }}
            onChange={(e) => {
              setRGB(e.target.value);
              const rgb = e.target.value.match(/(\d+)/g);
              if (rgb) {
                setHex(
                  rgbToHex(
                    parseInt(rgb[0]),
                    parseInt(rgb[1]),
                    parseInt(rgb[2]),
                  ),
                );
              } else {
                setHex("");
              }
            }}
          />

          <CopyButton
            className="h-fit py-8"
            onClick={() => {
              navigator.clipboard.writeText(rgb);
            }}
          >
            Copy
          </CopyButton>
        </div>
      </div>
      <div className="w-full sm:w-fit">
        <p className="font-bold ">Color preview:</p>
        <div
          className="min-w-[160px] h-[160px] mt-8 rounded-md w-full"
          style={{
            backgroundColor: hex,
          }}
        ></div>
      </div>
    </section>
  );
};

export const HexToRGB = () => (
  <Container
    appletTitle="Hex to RGB (and vice versa)"
    appletIcon="🎨"
    appletDescription="Converts a hex color code to RGB and vice versa."
  >
    <HexToRGBApplet />
  </Container>
);
