"use client";

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
RxCross2

export const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <section className="bg-gradient-to-t from-cyan-600 to-cyan-800 text-white" id="header">
      <div className="flex justify-between">
        <h1 className="font-Italianno m-7 duration-150">Waqar Un Nabi</h1>
        <ul className="m-7 md:flex hidden ">
          <a className='cursor-pointer' href="#home">
            <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Home</li>
          </a>
          <a className='cursor-pointer' href="#about">
            <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">About</li>
          </a>
          <a className='cursor-pointer' href="#skills">
            <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Skills</li>
          </a>
          <a className='cursor-pointer' href="#projects">
            <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Projects</li>
          </a>
          <a className='cursor-pointer' href="#contact">
            <li className="mx-5 text-2xl font-Italianno hover:scale-150 duration-150">Contact</li>
          </a>
        </ul>
        <div className="pr-5 md:hidden z-20"
          onClick={() => { setToggle(!toggle) }}>
          {!toggle ? <RxCross2 size={30} /> : <GiHamburgerMenu size={30} />}
        </div>
        {/* overlay starts here */}
        {!toggle && (
          <div className="fixed top-0 left-0 bg-cyan-800 h-screen text-red-500 w-full flex items-center justify-center">
            <ul className="m-7 text-white ">
              <a className='cursor-pointer' href="#home">
                <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Home</li>
              </a>
              <a className='cursor-pointer' href="#about">
                <li className="mx-5 my-2 text-6xl font-Italianno duration-150">About</li>
              </a>
              <a className='cursor-pointer' href="#skills">
                <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Skills</li>
              </a>
              <a className='cursor-pointer' href="#projects">
                <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Projects</li>
              </a>
              <a className='cursor-pointer' href="#contact">
                <li className="mx-5 my-2 text-6xl font-Italianno duration-150">Contact</li>
              </a>
            </ul>

          </div>
        )}
        {/* overlay ends here */}

      </div>
    </section>
  )
}
