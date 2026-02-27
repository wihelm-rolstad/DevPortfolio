import { usePageSeo } from './hooks/usePageSeo'
import {Database, Code, Atom, Activity, ExternalLink} from 'lucide-react'
import LiftLogPic from "./assets/LiftLog.png";

const Projects = () =>{
    usePageSeo({
        title: 'Wilhelm Rolstad | Projects',
        description: 'Projects built by Wilhelm Rolstad, including a fitness tracking application with React, Java Spring Boot, and Supabase.',
        canonicalPath: '/Projects',
    })

    return(
        <>
            <div className="flex flex-row items-center justify-center text-[var(--text-color)] border border-[var(--text-color)] rounded-2xl p-5 m-5 gap-5 w-[80vw] mx-auto max-w-[var(--page-width)]">
                <div className="w-[65%] p-2 flex flex-col gap-5">
                    <h2 className="text-2xl">Fitness application</h2>
                    <div className="flex flex-row gap-3">
                        <p>Fitness application to track progression</p>
                        <Activity className="text-green-300"/>
                    </div>

                    <p className="w-full">For this project i used React with Javascript as the frontend framework with Tailwindcss.
                            Connected the frontend to java backend via Rest API using Spring boot.
                            Backend connected to a PostgreSQL database at Supabase.
                            The backend runs on google cloud.
                    </p>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-row gap-1">
                            <Atom className="text-blue-500"></Atom>
                            <p>React</p>
                        </div>

                        <div className="flex flex-row gap-1">
                        <Database className="text-yellow-500"></Database>
                        <p>Supabase</p>
                        </div>

                        <div className="flex flex-row gap-1">
                            <Code className="text-purple-500"></Code>
                            <p>Javascript, Java, Tailwindcss</p>
                        </div>

                        
                    </div >
                    <a className="inline-flex items-center gap-2 border border-[var(--text-color)] bg-[var(--bg-color)] rounded-lg px-4 py-2 text-[var(--text-color)] w-40
                    hover:scale-110 transition duration-200" 
                    href="https://liftlog.no"> Check it out! <ExternalLink/></a>
                </div>
                <div className="overflow-hidden border rounded-lg w-[35%]">
                    <img src={LiftLogPic}/>
                </div>
            </div>
        </>
    )
}

export default Projects
