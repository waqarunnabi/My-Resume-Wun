"use client";

import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
RxCross2

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="bg-gradient-to-t from-cyan-600 to-cyan-800 text-white">
      <div className="flex justify-between">
        <h1 className="font-Italianno m-7 duration-150">Waqar Un Nabi</h1>
        <ul className="m-7 md:flex hidden ">
          <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Home</li>
          <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Skills</li>
          <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Projects</li>
          <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">About</li>
          <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Contact</li>
        </ul>
        <div className="pr-5 md:hidden z-20"
        onClick={() => { setToggle(!toggle) }}>
          {!toggle ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle &&(
        <div className="fixed top-0 left-0 bg-cyan-800 h-screen text-red-500 w-full flex items-center justify-center">
        <ul className="m-7 text-white ">
          <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Home</li>
          <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Skills</li>
          <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Projects</li>
          <li className="mx-5 my-2 text-6xl font-Italianno duration-150">About</li>
          <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Contact</li>
        </ul>

        </div>
        )}
        {/* overlay ends here */}

      </div>
    </section>
  )
}
