import React from "react";

interface TitleProps {
  text: string;
}

export function Title({ text } : TitleProps){
  return (
    <div className="relative pb-2">
      <h1 className="text-lg font-semibold font-poppins text-grey-500">{text}</h1>
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-100"></div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-secondary-500" style={{ width: `${text.length + 3}ch` }}></div>
    </div>
  );
};
