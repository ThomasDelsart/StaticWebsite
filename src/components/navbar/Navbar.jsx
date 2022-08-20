import React, {useState} from 'react';
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg'


const Menu = () =>
    <>
        <p> <a href="#home">Home</a> </p>
        <p> <a href="#wgpt3">What is GPT3?</a> </p>
        <p> <a href="#possibility">Open AI</a> </p>
        <p> <a href="#features">Case Studies</a> </p>
        <p> <a href="#blog">Library</a> </p>
    </>



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
   // Navigation bar that contains three items (the links, the sign buttons and the menu)
   <div className="gpt3__navbar">

        {/*Links of the nav bar*/}
       <div className="gpt3__navbar-links">

           {/*Logo*/}
           <div className="gpt3__navbar-links_logo">
               <img src={logo} alt="logo"/>
           </div>

           {/*Links container*/}
           <div className="gpt3__navbar-links_containers">
                <Menu />
           </div>

       </div>

       {/*Sign buttons of the nav bar*/}
       <div className="gpt3__navbar-sign">
           <p>Sign in</p>
           <button type="button">Sign up</button>
       </div>

       {/*Menu button and logic of it of the nav bar*/}
       <div className="gpt3__navbar-menu">
           {/*Menu icon logic*/}
           {toggleMenu ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/> : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/> }
           {/*Menu logic if toggled : show the menu list*/}
           {toggleMenu && (
               <div className="gpt3__navbar-menu_container scale-up-center">
                   <div className="gpt3__navbar-menu_container-links">
                       <Menu />
                       <div className="gpt3__navbar-menu_container-links-sign">
                           <p>Sign in</p>
                           <button type="button">Sign up</button>
                       </div>
                   </div>
               </div>
           )}
       </div>


   </div>
  );

}

export default Navbar;