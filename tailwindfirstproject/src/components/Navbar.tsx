import { useNavigate } from 'react-router'
import { useState } from 'react'
import {Moon, Sun, Languages} from 'lucide-react'

type NavbarProps = {
    darkBg: boolean
    onToggleBg: () => void
}   


function Navbar({ darkBg, onToggleBg }: NavbarProps) {

    const [isHidden, setIsHidden] = useState(true)
    const languageVisibility = isHidden ? 'hidden' : '';

    const navigate = useNavigate()

    function setDarkTheme() {
        const root = document.documentElement
        root.style.setProperty('--bg-color', '#0b0b0b')
        root.style.setProperty('--text-color', '#f5f5f5')
    }

    function setLightTheme() {
        const root = document.documentElement
        root.style.setProperty('--bg-color', '#ffffff')
        root.style.setProperty('--text-color', '#111111')
    }

    function handleThemeToggle() {
        if (darkBg) setLightTheme()
        else setDarkTheme()
        onToggleBg()
    }

  return (
    <div
      className="sticky top-0 w-full bg-[var(--bg-color)] h-20 p-5 text-lg text-[var(--text-color)]
      flex flex-row gap-10 items-center z-50">
        <div className="text-2xl cursor-default">Wilhelm Rolstad</div>
        <button className="ml-auto cursor-pointer hover:scale-110 transition duration-200" onClick={() => navigate("/")}>Home</button>
        <button className="cursor-pointer hover:scale-110 transition duration-200" onClick={() => navigate("/Cv")} >CV</button>
        <button className="cursor-pointer hover:scale-110 transition duration-200" onClick={() => navigate("/Projects")}>Projects</button>
        <button className="cursor-pointer hover:scale-110 transition duration-200"onClick={() => navigate("/Contact")} >Contact</button>
        <button onClick={handleThemeToggle} className="cursor-pointer hover:scale-110 transition duration-200">
        {darkBg ? <Sun /> : <Moon />}
        </button>
        <Languages className="cursor-pointer hover:scale-110 transition duration-200" onClick={() => setIsHidden((v) => !v)}></Languages>

        <div className={`w-30 h-20 fixed top-14 right-5 p-2 text-[var(--text-color)] ${languageVisibility}`}>
            <p className="flex items-center bg-[var(--bg-color)] p-2 h-10 border rounded hover:scale-110 transiton duration-200">Norsk</p>
            <p className="flex items-center bg-[var(--bg-color)] p-2 h-10 border rounded mt-2 hover:scale-110 transiton duration-200">English</p>
        </div>
    </div>
  )
}

export default Navbar
