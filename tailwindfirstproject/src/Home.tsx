const Dashboard = () => {
    return(
        <>

           
            <div className="bg-black rounded-3xl m-4 p-10 text-white h-screen" >
            <h1 className="text-6xl">Wilhelm Rolstad</h1>
            <p>I am a norwegian informatics student at NTNU Trondheim </p>

            <div className="bg-white rounded  m-2 p-5 text-black border ">
                <p>Some of my projects</p>

                <button className="cursor-pointer border bg-black text-white p-2 m-2 rounded hover:bg-white hover:text-black hover:scale-110 transiton duration-500 ">See projects </button>

            </div>


            </div>
        </>
    )
}

export default Dashboard