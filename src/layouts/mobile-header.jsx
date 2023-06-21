import React from "react";
import Link from "next/link";

import logo from "@/assets/img/logo.svg"

export default function MobileHeader({isSidebarVisible, setIsSidebarVisible}) {
  return (
    <div className="mobile-header hidden md:flex md:items-center md:justify-between h-[100px] bg-gray-100/90 px-[25px] fixed top-0 left-0 right-0 z-[11] w-[100%] backdrop-blur-xl shadow-[0_0_40px_-30px_rgb(0,0,0,0.5)] xs:h-[85px]">
      <Link href={"/"} className="">
        <img className="lg:w-[150px] xs:w-[130px]" src={logo.src} alt="Prodobit" />
      </Link>

      <div className={`hamburger-menu ${isSidebarVisible ? 'sidebar-active' : ''}`}  onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
