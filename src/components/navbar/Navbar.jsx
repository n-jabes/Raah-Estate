import { useState } from 'react';
import './navbar.scss';

function Navbar() {
    const [open,setOpen]= useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className='logo'>
          <img src="/logo.png" alt="" />
          <span>RaahEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign up</a>
        <a href="" className='register'>Sign in</a>
        <div className="menuIcon">
            <img src="/menu.png" alt="" onClick={(e)=>{setOpen(!open)}}/>
        </div>
        <div className={open? 'menu active': 'menu'}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
        <a href="/">Sign in</a>
        <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
