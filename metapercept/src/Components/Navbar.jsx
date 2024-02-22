import React from 'react';
import style from "../Styles/Navbar.module.css"

export const Navbar = () => {
  return (
    <div id={style.navbar}>
        <div>title</div>
        <div className={style.catagory}>
            <ul>
                <p>Home</p>
                <p>About</p>
                <p>Blog</p>
                <p>Contact</p>
                <p className={style.button}>Button</p>
            </ul>
        </div>
    </div>
  )
}
