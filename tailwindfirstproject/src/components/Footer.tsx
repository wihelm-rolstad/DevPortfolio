import {Mail, Github, Linkedin, Phone} from 'lucide-react'

import SkylineIcon from '../assets/Vectors/Skyline.svg?react'

const Footer = () => {
    return(
        <>
            <div className="relative w-full bg-blue-500 overflow-hidden h-[12rem] mt-20">
                <div className=" absolute top-1 left-2 flex flex-col gap-2 p-6 z-100 text-[10px]">
                    <div className="flex gap-2 items-center">
                        <Phone className="h-4"/>
                        <p>+47 90 61 23 35</p>
                    </div>
                    
                    <div className="flex gap-2 items-center">
                        <Mail className="h-4"></Mail>
                        <p>wilhelmsrolstad@gmail.com</p>
                    </div>

                    <div className="flex gap-2 items-center">
                        <Github className="h-4"></Github>
                        <a href="https://github.com/wihelm-rolstad">wilhelm-rolstad</a>
                    </div>
                        
                    <div className="flex gap-2 items-center">
                        <Linkedin className="h-4"></Linkedin>
                        <a href="https://www.linkedin.com/in/wilhelm-rolstad-590a29361/">Wilhelm Rolstad</a>
                    </div>
                </div>

                <SkylineIcon className="absolute left-1/2 top-0 h-60 w-auto -translate-x-21/41 -translate-y-[-2rem] text-blue-800" preserveAspectRatio="xMidYMid slice"></SkylineIcon>
                
            </div>
        </>
    )
}

export default Footer;