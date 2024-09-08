import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      className={`flex items-center gap-8 py-12 px-24 border-2 rounded-[998px] hover:bg-snohvit hover:-translate-y-1 transition-all active:translate-y-0 ${props.className ?? ""}`}
    >
      {props.children} {props.icon}
    </button>
  );
};

export const CopyButton: React.FC<ButtonProps> = (props) => {
  const [copied, setCopied] = useState(false);

  return (
    <Button
      {...props}
      onClick={(e) => {
        props.onClick?.(e);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? "Copied!" : props.children}
    </Button>
  );
};
