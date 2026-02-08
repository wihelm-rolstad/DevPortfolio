import {Mail, Github, Linkedin, Phone} from 'lucide-react'

import SkylineIcon from '../assets/Vectors/Skyline.svg?react'

const Footer = () => {
    return(
        <>
            <div className="relative w-full bg-blue-500 overflow-hidden h-[30rem] mt-20">
                <div className=" absolute top-4 left-8 flex flex-col gap-4 p-6 z-100 text-3xl">
                    <div className="flex gap-4">
                        <Phone/>
                        <p>+47 90 61 23 35</p>
                    </div>
                    
                    <div className="flex gap-4">
                        <Mail></Mail>
                        <p>wilhelmsrolstad@gmail.com</p>
                    </div>

                    <div className="flex gap-4">
                        <Github></Github>
                        <a href="https://github.com/wihelm-rolstad">wilhelm-rolstad</a>
                    </div>
                        
                    <div className="flex gap-4">
                        <Linkedin></Linkedin>
                        <a href="https://www.linkedin.com/in/wilhelm-rolstad-590a29361/">Wilhelm Rolstad</a>
                    </div>
                </div>

                <SkylineIcon className="absolute left-1/2 top-0 h-full w-auto -translate-x-21/41 -translate-y-[-4rem] text-blue-800" preserveAspectRatio="xMidYMid slice"></SkylineIcon>
                
            </div>
        </>
    )
}

export default Footer;