"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Error page goes here and message is : {error.message}.</h1>
      <button className="p-2 m-2 bg-red-600 rounded text-white" onClick={reset}>
        Try Again
      </button>
    </>
  );
}
