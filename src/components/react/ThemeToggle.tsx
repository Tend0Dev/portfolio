import { useEffect, useState } from "react";
import sun from "../../assets/icon-sun.svg"
import moon from "../../assets/icon-moon.svg"

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if(storedTheme === 'dark'){
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }else{
      localStorage.setItem("theme", "light")
        setIsDarkMode(false)
    }
  }, []);

  const toggleTheme = () => {
    if(isDarkMode){
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light")
        setIsDarkMode(false)
    }else{
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
        setIsDarkMode(true)
    }
  }

  return (
    <button
      className="size-5 cursor-pointer animate-float hover:scale-105 ease-linear "
      onClick={toggleTheme}
    >
      <img src={isDarkMode ? sun.src : moon.src} alt="theme toggle" />
    </button>
  );
};

export default ThemeToggle;