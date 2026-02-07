import { useNavigate } from 'react-router'

type NavbarProps = {
  onToggleBg: () => void
}

function Navbar({ onToggleBg }: NavbarProps) {
     const navigate = useNavigate()
  return (
    <div
      className="sticky top-0 w-full bg-black h-20 p-5 text-lg text-white
      flex flex-row gap-10 items-center"
    >
      <div className="text-2xl">Wilhelm Rolstad</div>
      <button className="ml-auto cursor-pointer" onClick={() => navigate("/")}>Home</button>
      <button className="cursor-pointer" onClick={() => navigate("/Cv")} >CV</button>
      <button className="cursor-pointer" onClick={() => navigate("/Projects")}>Projects</button>
      <button className="cursor-pointer"onClick={() => navigate("/Contact")} >Contact</button>
      <button className="cursor-pointer" onClick={onToggleBg}>X</button>
    </div>
  )
}

export default Navbar