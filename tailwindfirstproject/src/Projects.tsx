import {Database, Code, Atom, Activity} from 'lucide-react'

const Projects = () =>{
    return(
        <>
            <div className="flex flex-col text-[var(--text-color)] border border-[var(--text-color)] rounded-2xl p-5 m-5 gap-3 w-[80vw] mx-auto">
                <h2 className="text-2xl">Fitness application</h2>
                <div className="flex flex-row gap-3">
                    <p>Fitness application to track progression</p>
                    <Activity className="text-green-300"/>
                </div>

                <p className="w-120">For this project i used React with Javascript as the frontend framework with Tailwindcss.
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

                    
                </div>
                <a className="bg-white text-black w-30 rounded p-2" href=""> Check it out!</a>
            </div>
        </>
    )
}

export default Projects