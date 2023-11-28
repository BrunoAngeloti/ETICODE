import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { IoMdSearch } from "react-icons/io";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import { useState, useEffect } from "react";

export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const renderWebMenu = () => {
    return(
      <nav className="gap-8 ml-auto hidden font-poppins md:flex">
        {/*
        <div className="relative flex-row items-center bg-primary-100 bg-opacity-20 rounded-3xl hidden lg:flex">
          <IoMdSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-lg text-gray-400"/>
          <input placeholder="pesquisar..." className="pl-12 border-none outline-none bg-transparent pr-8"/>
        </div>
        */}

        <button className="text-primary-500 hover:underline">
          Login
        </button>

        <Button title="Criar uma conta" onPress={() => {}} variant="outlined"/>
      </nav>
    )
  }

  const renderMobileMenu = () => { 
    return (
      <div className={`absolute ${!menuOpen ? "-top-full shadow-none" : "top-full shadow-2xl"} left-0 w-full border-t border-primary-500 py-3 px-4 z-40 transition-all duration-500 flex flex-col sm:flex-row gap-4 bg-secondary-50`}>
        <Button title="Login" onPress={() => {}} variant="outlined"/>
        <Button title="Criar uma conta" onPress={() => {}} variant="filled"/>
      </div>
    );
  }

  return(
    <header className="w-full bg-secondary-50 flex items-center justify-center fixed z-50">
      <div className="w-full max-w-7xl flex flex-row items-center px-10 py-4 bg-secondary-50 z-50 h-full">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={126}
            height={45}
            alt="Logo ETICODE"
          />
        </Link>

        {renderWebMenu()}
        

        {
          menuOpen ?
          <IoMdClose className="ml-auto flex md:hidden text-primary-800 cursor-pointer" size={30} onClick={toggleMenu} /> :
          <CgMenu className="ml-auto flex md:hidden text-primary-800 cursor-pointer" size={30} onClick={toggleMenu} />
        }
      </div>
      {renderMobileMenu()}
    </header>
  )
}