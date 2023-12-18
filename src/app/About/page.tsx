import Image from 'next/image'
import Header from '../../components/Header';

export default function Home() {
    return (
        <main className="">
            <div className="bg-white border-b border-gray-300">
                <Header current="about" />
            </div>
            <div className="py-6 px-1 max-w-7xl mx-auto">
                <div className=" border-b border-gray-900 pb-[1.5rem]">
                    <p className="text-black text-[2.5rem] font-bold font-mono text-center md:text-start uppercase tracking-wide">Shanmukha Yenneti</p>
                </div>
                <div className="mt-6 space-y-10 leading-[1.8rem] px-2 md:px-0 border-b border-gray-900 pb-[1.5rem]">
                    <p className="text-black font-mono">
                        I am a PhD student in Brain and Cognitive Sciences at MIT. My advisor is Ted Gibson, which means that I am a very lucky person. I study psycholinguistics, or what processes in the mind are involved in language production and comprehension. Using the noisy channel framework, I investigate how our expectations shape how we perceive language; in other words, I study why we hear what we want to hear. I am also fascinated by the how of language: why do we say things using a certain wording and prosody? And how does the medium in which we communicate — sign, speech, writing — affect how we produce and comprehend language?
                    </p>
                    <p className="text-black font-mono">Teaching and mentoring are very close to my heart. These days I am a teaching assistant at MIT 9.59: Lab in Psycholinguistics. I love seeing students develop coding and statistics skills because, when I started college, I was set on avoiding CS and stats completely. But thanks to my amazing mentor, I overcame my fears and did acquire computational skills, which turned out to be one of the best things to happen to me in college (so if you are reading this but you have no idea how/why to STEM, reach out :) ).</p>
                    <p className="text-black font-mono">In the past, as an undergrad at Harvard, I have worked with Anthony Yacovone and Jesse Snedeker on language development and applying neural decoding to analysis of ERP data. I have also worked with Mahzarin Banaji for several years on implicit gender-fame stereotyping and implicit attitude acquisition, and our relationship has been lifechanging for me.</p>
                </div>
                <div className=" border-b border-gray-900 pb-[1.2rem] mt-6">
                    <p className="text-black text-[2.1rem] tracking-wide font-bold font-mono text-center md:text-start uppercase">Current Interests</p>
                    <div className="space-y-2 mt-4 ml-5">
                        <p className="text-black font-mono"> &#x2022; Noisy Channel Processing
                        </p>
                        <p className="text-black font-mono">&#x2022; Top-down Influences in Language Perception
                        </p>
                        <p className="text-black font-mono">&#x2022; Prosody
                        </p>
                        <p className="text-black font-mono">&#x2022; Statistical methods</p>
                    </div>
                </div>
                <div className=" pb-[1.2rem] px-1 md:px-0 mt-6">
                    <p className="text-black text-[2.1rem] tracking-wide font-bold font-mono text-center md:text-start uppercase">WHEN I AM NOT DOING RESEARCH I AM… </p>
                    <div className="space-y-2 mt-4 ml-5">
                        <p className="text-black font-mono"> &#x2022; watching old movies that are probably not from the US.
                        </p>
                        <p className="text-black font-mono">&#x2022; trying to figure skate.
                        </p>
                        <p className="text-black font-mono">&#x2022; starting to learn a new language and, after a deep, albeit quick, dive, totally neglecting it.
                        </p>
                        <p className="text-black font-mono">&#x2022; enjoying a glass of wine or a wee dram.</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
