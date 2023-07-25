import React from 'react'
import { useGlobalContext } from './Context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const Theme = () => {
const { isDarkTheme, setIsDarkTheme } =  useGlobalContext();

const changeTheme = () => {
  const tempValue = !isDarkTheme;
    setIsDarkTheme(tempValue);
    localStorage.setItem('dark theme', tempValue);
    document.querySelector('body').classList.toggle('dark-theme', tempValue);
}

  return (
    <button onClick={changeTheme} > { isDarkTheme? <BsFillSunFill/>: <BsFillMoonFill /> }</button>
  )
}

export default Theme;