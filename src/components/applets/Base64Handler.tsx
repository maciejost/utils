import { useState } from "react";
import { Container } from "../common/Container";
import { TextArea } from "@fremtind/jkl-text-input-react";
import { CopyIcon } from "@fremtind/jkl-icons-react";
import { Button } from "../common/Button";

const INITIAL_ENCODE_TEXT = "Copy encoded text";
const INITIAL_DECODE_TEXT = "Copy decoded text";

const Base64HandlerApplet = () => {
  const [encode, setEncode] = useState("");
  const [decode, setDecode] = useState("");

  const [encodeButtonText, setEncodeButtonText] = useState(INITIAL_ENCODE_TEXT);
  const [decodeButtonText, setDecodeButtonText] = useState(INITIAL_DECODE_TEXT);

  return (
    <section>
      <TextArea
        label="Encode"
        labelProps={{
          variant: "medium",
          className: "font-bold",
        }}
        value={encode}
        onChange={(e) => {
          setEncode(e.target.value);
          setDecode(btoa(e.target.value));
        }}
        placeholder="Enter text to encode"
      />
      {!!encode.length && encode !== "Invalid base64 string" && (
        <Button
          icon={<CopyIcon />}
          onClick={() => {
            navigator.clipboard.writeText(encode);
            setEncodeButtonText("Copied!");
            setTimeout(() => {
              setEncodeButtonText(INITIAL_ENCODE_TEXT);
            }, 2000);
          }}
          className="mt-24"
        >
          {encodeButtonText}
        </Button>
      )}
      <TextArea
        className="mt-24"
        label="Decode"
        labelProps={{
          variant: "medium",
          className: "font-bold",
        }}
        value={decode}
        onChange={(e) => {
          setDecode(e.target.value);
          try {
            setEncode(atob(e.target.value));
          } catch {
            setEncode("Invalid base64 string");
            return;
          }
        }}
        placeholder="Enter text to decode"
      />
      {!!decode.length && (
        <Button
          icon={<CopyIcon />}
          onClick={() => {
            navigator.clipboard.writeText(decode);
            setDecodeButtonText("Copied!");
            setTimeout(() => {
              setDecodeButtonText(INITIAL_DECODE_TEXT);
            }, 2000);
          }}
          className="mt-24"
        >
          {decodeButtonText}
        </Button>
      )}
    </section>
  );
};

export const Base64Handler = () => (
  <Container
    appletTitle="Base64 Handler"
    appletDescription="Base64 Handler is a simple tool to encode and decode base64 strings."
    appletIcon="🖥️"
  >
    <Base64HandlerApplet />
  </Container>
);
