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
    <button
      className="p-16 md:px-24 md:py-32 bg-background-page shadow-md hover:bg-background-container-high transition-all duration-300 ease-in-out rounded-lg hover:-translate-y-8 "
      onClick={() => setIsAppletOpen(!isAppletOpen)}
    >
      <div className="heading-2" aria-hidden="true">
        {appletIcon}
      </div>
      <div>
        <h2 className="heading-2 mb-12">{appletTitle}</h2>
        <p className="text-left">{appletDescription}</p>
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
