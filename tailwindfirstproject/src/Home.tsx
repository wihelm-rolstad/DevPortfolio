import { usePageSeo } from './hooks/usePageSeo'

const Dashboard = () => {
    usePageSeo({
        title: 'Wilhelm Rolstad | Home',
        description: 'Wilhelm Rolstad is an informatics student at NTNU in Trondheim, building full-stack projects with React and Java.',
        canonicalPath: '/',
    })

    return(
        <>
            <div className="mx-auto m-4 p-10 text-[var(--text-color)] h-screen max-w-[var(--page-width)]" >
            <h1 className="text-6xl">Wilhelm Rolstad</h1>
            <p>I am a norwegian informatics student at NTNU Trondheim </p>

            <div className="bg-white rounded  m-2 p-5 text-black border ">
                <p>Some of my projects</p>

               

            </div>


            </div>
        </>
    )
}

export default Dashboard
