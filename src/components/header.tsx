import React, { useState } from "react";
import { Link } from "gatsby";

import { MdMenu, MdOutlineDarkMode, MdLightMode, MdLight, MdDarkMode } from "react-icons/md";

import '../styles/global.css'
import '../styles/index.css'



function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const [isDark, setIsDark] = React.useState(false)


  const navList = 
    <>
    
      <Link to="/page1" className="Link2 hover:underline">Page 1</Link>
      <Link to="/page2" className="Link2 hover:underline">Page 2</Link>

    </>


  


  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }  
  }, [isDark])





  return (
    

    <header className="NavBar flex justify-between">
      <Link to='/' className='Link1 ml-14 pt-3 pb-4'>Project Title</Link>


      <div className="flex flex-row">

        <div className="FullNav">

          <ul className="flex mt-7 mr-3">
            {navList}
          </ul>

        </div>
        
        <div className="ToggleNav">

          <button onClick={() => {setNavOpen(navOpen => !navOpen)}}>
            <MdMenu className="ml-4 mr-8 mt-4 text-black dark:text-white" size={30} />
          </button>

          {navOpen ?

            <div className="border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-md bg-white">
              <ul className="flex flex-col text-start ml-3">
                {navList}
              </ul>
            </div>

          : null }

        </div>

        <div className="ThemeToggler">

          { isDark ? (<button onClick={() => setIsDark(!isDark)}><MdOutlineDarkMode size={28} className="text-black dark:text-white"/></button>)
            : (<button onClick={() => setIsDark(!isDark)}><MdLightMode size={28} className="text-black dark:text-white"/></button>) }

        </div>


      </div>


        
    </header>

  )

}

export default Header
