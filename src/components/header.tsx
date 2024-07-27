import React, { useState } from "react";
import { Link } from "gatsby";

import { ThemeToggler } from 'gatsby-plugin-dark-mode'


import { MdMenu, MdOutlineDarkMode, MdLightMode, MdLight, MdDarkMode } from "react-icons/md";

import '../styles/global.css'
import '../styles/index.css'



function Header() {

  const [navOpen, setNavOpen] = useState(false)

  const navList = 
    <>
    
      <Link to="/page1" className="Link2 hover:underline">Page 1</Link>
      <Link to="/page2" className="Link2 hover:underline">Page 2</Link>

    </>




  class MyThemeToggler extends React.Component {
    render() {

      return (

        <>

        <div><p>hello world</p></div>



        {


        


        <ThemeToggler>
          {({ theme, toggleTheme }: any) => (
            <label>



              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme == 'dark'}
                className="hidden"
              />

              <div className="Other Unselectable hover:cursor-pointer mt-6 mr-8">
                {sessionStorage.getItem("theme") == "light" ? <MdOutlineDarkMode size={28}/> : <MdLightMode size={28}/>}
              </div>

            </label>




          )}
          </ThemeToggler>


          


          }

        </>

          
      )
    }
  }




  return (
    

    <header className="NavBar flex justify-between">
      <Link to='/' className='Link1 text-[35px] ml-14 pt-3 pb-4'>Project Title</Link>


      <div className="flex flex-row">

        <div className="FullNav">

          <ul className="flex mt-7 mr-3">
            {navList}
          </ul>

        </div>
        
        <div className="ToggleNav">

          <button onClick={() => {setNavOpen(navOpen => !navOpen)}}>
            <MdMenu className="ml-4 mr-8 mt-6" size={30}/>
          </button>

          {navOpen ?

            <div className="border-1 border-slate-300 border-2 pt-4 pb-3 pl-2 pr-4 -ml-16 absolute rounded-md bg-white">
              <ul className="flex flex-col text-start ml-3">
                {navList}
              </ul>
            </div>

          : null }

        </div>

        <MyThemeToggler />


      </div>


        
    </header>

  )

}

export default Header
