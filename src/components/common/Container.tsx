import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (isAppletOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isAppletOpen]);

  const AppletDialog = (
    <>
      {isAppletOpen && (
        <button
          onClick={() => setIsAppletOpen(false)}
          aria-hidden="true"
          tabIndex={-1}
          className="w-screen h-screen absolute backdrop-blur-sm bg-granitt bg-opacity-85 inset-0 -z-1"
        />
      )}

      <dialog
        className="absolute bg-background-page top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[800px] max-w-[calc(100vw-2rem)] min-w-[380px] p-16 md:p-40 "
        open={isAppletOpen}
      >
        <button
          className="absolute top-8 right-16"
          onClick={() => setIsAppletOpen(false)}
        >
          <span aria-hidden="true">❌</span>
          <span className="sr-only">Close {appletTitle}-applet</span>
        </button>
        <div className="mb-24 md:mb-40">
          <h2 className="heading-2 mb-12">{appletTitle}</h2>
          <p className="text-left max-w-[468px]">{appletDescription}</p>
        </div>

        {isAppletOpen && children}
      </dialog>
    </>
  );

  return (
    <>
      <button
        className="p-16 md:px-24 md:py-32 bg-background-page shadow-md hover:bg-background-container-high transition-all duration-150 ease-in-out rounded-lg hover:-translate-y-8 "
        onClick={() => setIsAppletOpen(!isAppletOpen)}
      >
        <div className="heading-2" aria-hidden="true">
          {appletIcon}
        </div>
        <div>
          <h2 className="heading-2 mb-12">{appletTitle}</h2>
          <p className="text-left">{appletDescription}</p>
        </div>
      </button>
      {AppletDialog}
    </>
  );
};
