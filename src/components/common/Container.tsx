import { useState } from "react";

type ContainerProps = {
  children: React.ReactNode;
  appletTitle: string;
  appletDescription: string;
  appletIcon: string;
};

export const Container: React.FC<ContainerProps> = ({
  children,
  appletTitle,
  appletDescription,
  appletIcon,
}) => {
  const [isAppletOpen, setIsAppletOpen] = useState(false);

  return (
    <button className="" onClick={() => setIsAppletOpen(!isAppletOpen)}>
      <div className="">{appletIcon}</div>
      <div>
        <h1>{appletTitle}</h1>
        <p>{appletDescription}</p>
      </div>
      <dialog open={isAppletOpen}>
        <button onClick={() => setIsAppletOpen(false)}>
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close {appletTitle}-applet</span>
        </button>
        {children}
      </dialog>
    </button>
  );
};
