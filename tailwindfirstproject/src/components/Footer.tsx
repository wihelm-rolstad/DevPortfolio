import {Mail, Github, Linkedin, Phone} from 'lucide-react'

const Footer = () => {
    return(
        <>
            <div className="flex flex-col w-full bg-blue-500 p-4 text-center gap-4">
                
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
        </>
    )
}

export default Footer;