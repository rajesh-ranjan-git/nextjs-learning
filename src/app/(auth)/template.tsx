"use client";

import { useState } from "react";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col justify-around items-center h-[56vh]">
      <div className="text-xl">
        <input
          value={inputValue}
          placeholder="Enter something to render..."
          className="mx-4 px-4 p-2 rounded-lg w-96 text-black placeholder:text-slate-400"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="hover:border-white bg-white hover:bg-black p-2 border rounded-lg text-black hover:text-white transition-all ease-in-out"
          onClick={() => setValue(inputValue)}
        >
          Click Me!
        </button>
      </div>
      {children}
      <div className="p-4 h-10 text-3xl">
        <span>{value}</span>
      </div>
    </div>
  );
};

export default AuthLayout;
