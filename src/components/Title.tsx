import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface TitleProps {
  text: string;
  link?: string;
  linkText?: string;
}

export function Title({ text, link, linkText } : TitleProps){
  return (
    <div className="relative pb-2 flex flex-row items-center font-poppins">
      <h1 className="text-lg font-semibold text-grey-500">{text}</h1>

      {link && 
        <Link href={link ?? ''} passHref className="ml-auto text-primary-500 font-medium text-base flex flex-row gap-2 items-center">
          {linkText}
          <BsArrowRight />
        </Link>
      }

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-secondary-100"></div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-secondary-500" style={{ width: `${text.length + 3}ch` }}></div>
    </div>
  );
};
