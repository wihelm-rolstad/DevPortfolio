const Contact = () => {
    return(
        <>  
        <div className="flex flex-col border border-[var(--text-color)] rounded-2xl text-[var(--text-color)] mx-auto p-5 m-5 w-[70vw] gap-5">
            <div>
                <h2>To contact me send an email, call, or use the form below</h2>
            <p></p>
            </div>
            <div className="flex flex-col border border-[var(--text-color)] rounded-2xl p-4 gap-2">
                <h1> Contact </h1>
                <div className="flex gap-2">
                <input className="border rounded-lg p-1 w-full" placeholder="Your name..."></input>
                <input className="border rounded-lg p-1 w-full" placeholder="Your email adress..."></input>
                </div>
                <textarea className="border rounded-lg p-1" placeholder="What can i help you with?"></textarea>
                <button>Send message</button>
            </div>
        </div>
        </>
    )
}

export default Contact;