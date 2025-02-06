"use client";

const ErrorBoundary = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  return (
    <div className="flex flex-col justify-around items-center w-screen h-[43.5vh] text-5xl">
      <span>{error.message}</span>
      <button
        className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-2xl text-black hover:text-white transition-all ease-in-out"
        onClick={reset}
      >
        Retry!
      </button>
    </div>
  );
};

export default ErrorBoundary;
