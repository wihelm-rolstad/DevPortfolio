import { useState } from 'react'
import { Phone, Mail, Send } from 'lucide-react'
const Contact = () => {
    
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");

    async function handleSubmit(){
        console.log("do email thing")
    }

    const inputStyle = "border rounded-lg py-2 px-3 w-full bg-gray-100 border-gray-300 focus:outline-none"
    const contactCard = "border border-gray-300 px-5 py-10 rounded-2xl w-[50%] bg-gray-200 flex gap-2 items-center justify-center"

    return(
        <>  
        <section className="max-w-5xl mx-auto py-10 flex flex-col gap-5">
            <header>
                <h1 className="text-xl"> Kontakt </h1>
                <p>Kontakt meg via mail, over telefon eller bruk kontaktskjemaet</p>
            </header>

            <section className="flex mx-auto w-full items-center gap-5">
                <div className={contactCard}>
                    <Phone/>
                    <p>+47 90 61 23 35</p>
                </div>
                <div className={contactCard}>
                    <Mail/>
                    <p>wilhelmsrolstad@gmail.com</p>
                </div>
            </section>

            <form onSubmit={handleSubmit} className="flex flex-col max-w-5xl bg-gray-200 border border-gray-300 rounded-2xl mx-auto py-5 px-5 w-[70vw] gap-5">
                    <h1 className="text-lg"> Kontaktskjema </h1>
                    <div className="flex gap-2">
                    <input className={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Navnet ditt*"></input>
                    <input className={inputStyle} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Din epost addresse*"></input>
                    </div>
                    <input type="text" className={inputStyle} placeholder="Emne/tittel*"/>
                    <textarea className={`${inputStyle} h-70`} value={message} onChange={(e) => setMessage(e.target.value)}   placeholder="Hva kan jeg hjelpe deg med?*"></textarea>
                    <button className="cursor-pointer border rounded-lg p-2 w-100 mx-auto hover:bg-[var(--bg-color)] hover:text-[var(--text-color)] hover:scale-105 active:scale-95 transition duration-200"> Send melding <Send/> </button>
            </form>
        </section>
        </>
    )
}

export default Contact;
