import React from 'react'
import style from './Rezume.module.css'


const Rezume = () => {
  return (
    <>
    <div className={style.header}>
        <div className={style.context}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Resume</a></li>
                <li><a href="">About</a></li>
            </ul>

        </div>
        <div className={style.rezume}>
            <p>Hello, I'm</p>
            <h1>Charles Anderson</h1>
            <span>and this is My Rezume</span>

        </div>

    </div>
    </>
  )
}

export default Rezume