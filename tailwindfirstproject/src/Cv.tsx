import { usePageSeo } from './hooks/usePageSeo'

import StbIcon from './assets/Vectors/STB.svg?react'
import CastleIcon from './assets/Vectors/Castle.svg?react'
import GlosIcon from './assets/Vectors/Glos.svg?react'
import StorebrandIcon from './assets/Vectors/Storebrand.svg?react'
import ntnuLogo from './assets/NTNU.png'

const CV = () => {
    usePageSeo({
        title: 'Wilhelm Rolstad | CV',
        description: 'CV for Wilhelm Rolstad: education at NTNU and work experience including Storebrand and military service.',
        canonicalPath: '/Cv',
    })

    return(
        <>
            <div className="flex flex-col mx-auto rounded p-2 m-2 h-screen max-w-[var(--page-width)] overflow-hidden gap-20">

                <div className="relative bg-blue-500 m-2 h-70 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 p-4">
                        <h2 className="text-2xl">Stabekk videregående skole</h2>
                        <p>Studiespessialiserende med fokus på realfag</p>
                        <p>AUG 2019 - JUN 2022</p>
                    </div>
                    <StbIcon className="w-full h-auto block text-blue-700 -translate-y-[-4.2rem]" />
                </div>

                 <div className="relative bg-green-400 m-2 h-70 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 p-4">
                        <h2 className="text-2xl">FØRSTEGANGSTJENESTE HÆREN</h2>
                        <p>Vaktsoldat HMKG </p>
                        <p>AUG 2022 - JUN 2023</p>
                    </div>
                    <CastleIcon className="w-full h-auto block text-green-600 -translate-y-[-2rem]"/>
                </div>
        

                <div className="relative bg-blue-400 m-2 rounded-2xl h-70 overflow-hidden">
                    <div className="absolute top-0 left-0 p-4">
                        <h2 className="text-2xl">NTNU TRONDHEIM</h2>
                        <p>Bachelor i informatikk</p>
                        <p>AUG 2024 -</p>
                    </div>
                    <div className="absolute top-0 right-0 p-6">
                        <img src={ntnuLogo} alt="NTNU" className="w-40"></img>
                    </div>
                    <GlosIcon className="w-full h-auto block text-blue-600 -translate-y-[-1.6rem]"/>
                </div>

                <div className="relative bg-red-500  m-2 rounded-2xl h-70 overflow-hidden">
                    <div className="absolute top-0 left-0 p-4">
                        <h2 className="text-2xl">STOREBRAND FORSIKRING</h2>
                        <p>Skaderådgiver Vikar</p>
                        <p>Sesong JUN 2025 -</p>
                    </div>
                    <StorebrandIcon className="w-full h-auto block text-red-700 -translate-y-[-4.6rem]"/>
                    
                </div>
            </div>
        </>
    )
}

export default CV