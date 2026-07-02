import React from 'react'
import style from '../nav/navbar.module.css'


export default function Navbar() {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.logo}>My App</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#" className={style.btn}>Log In</a></li>
        </ul>
      </nav>
    </div>
  )
}
