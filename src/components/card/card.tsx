import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-around items-center hover:bg-white m-3 p-2 border rounded-xl min-w-96 min-h-48 hover:text-black transition-all hover:scale-105 cursor-pointer ease-in-out">
      {children}
    </div>
  );
};

export default Card;
