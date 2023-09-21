'use client'
import React from 'react'
import { useState } from 'react'
import MenuUi from './MenuUi'
import { AnimatePresence } from 'framer-motion'
const MenuButton = () => {
    const [isActive, setIsActive]= useState(false)
  return (
    <>
      <button
            id="menu-btn  "
            onClick={() => setIsActive(!isActive, true)}
            className={` z-[100] hidden lg:flex hamburger focus:outline-none ${isActive ? "open" : ""
              } `}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
          <AnimatePresence mode="wait">

    {isActive && <MenuUi/>}
          </AnimatePresence>
    </>
  )
}

export default MenuButton
