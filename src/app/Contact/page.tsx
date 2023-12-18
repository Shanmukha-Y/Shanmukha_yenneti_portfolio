import Image from 'next/image'
import Header from '../../components/Header';

export default function Home() {
  return (
    <main className="">
      <div className="bg-white relative border-b border-gray-300">
        <Header current="Contact" />
      </div>
     
        <div className="py-6 px-1 max-w-7xl mx-auto">
          <div className="pb-[1.5rem]">
            <p className="text-black text-[2.2rem] font-bold font-mono text-start pl-4 md:pl-0 uppercase tracking-wide">Contact</p>
          </div>
          <div className="space-y-2 ml-5 flex flex-col ">
            <p className="text-black font-mono"> &#x2022; Email : moshepol[at]mit[dot]edu
            </p>
            <div>
              <a href="https://twitter.com/shAanmukha" target="_blank" className="text-black font-mono font-semibold ">&#x2022; <span className="custom-underline-animation cursor-pointer z-[-20] md:z-[20]">Twitter</span>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/shanmukha-yenneti/" target="_blank" className="text-black font-mono font-semibold ">&#x2022; <span className="custom-underline-animation cursor-pointer z-[-20] md:z-[20]">Linkedin</span>
              </a>
            </div>

          </div>
          <div className="pb-[1.2rem] mt-6 leading-[1.9rem] px-4 md:px-0">
            <p className="text-black text-[1.3rem] tracking-wide font-semibold font-mono text-center md:text-start uppercase">A THOUGHT ABOUT LANGUAGE IN SOCIETY:</p>
            <div className="space-y-4 mt-4 ml-5">
              <p className="text-black font-mono"> &#x2022; Language is a strong marker of identity. We love talking about who in the US says “pop” and who says “soda.” We also immediately pick out who has an American accent and who has a foreign accent (and then, regrettably, give out jobs based on the accent’s prestige¹). One astonishing study showed that, while children usually prefer to play with same-race children, given the choice of playing with an other-race kid with a native accent or a same-race kid with a foreign accent, children chose to play with the other-race kid with the native accent². For these kids, accent trumps race. While we should do better when fighting racism, we should also be aware of other biases that we might have, which could be just as strong, like accent bias. Keep this in mind next time you communicate with a foreign-accented speaker, and learn more about it at <span className="font-semibold custom-underline-animation cursor-pointer">Outsmarting Implicit Bias.</span>
              </p>
              <p className="text-black font-mono "> <span className="font-semibold">1.</span> Timming, A. R. (2017). The effect of foreign accent on employability: a study of the aural dimensions of aesthetic labour in customer-facing and non-customer-facing jobs. Work, Employment and Society, 31(3), 409–428. <span className="custom-underline-animation cursor-pointer underline hover:no-underline"> https://doi.org/10.1177/0950017016630260</span>
              </p>
              <p className="text-black font-mono"><span className="font-semibold"> 2.</span> Kinzler KD, Shutts K, Dejesus J, Spelke ES. Accent trumps race in guiding children’s social preferences. Soc Cogn. 2009 Aug 1;27(4):623-634. doi: 10.1521/soco.2009.27.4.623. PMID: 21603154; PMCID: PMC3096936.
              </p>
            </div>
          </div>
          <div className=" pb-[1.2rem] px-1 md:px-0 mt-6">
            <p className="text-black text-[1.3rem] tracking-wide font-bold font-mono text-center md:text-start uppercase">PERSONAL NOTE:</p>
            <div className="space-y-2 mt-4 ml-5">
              <p className="text-black font-mono leading-[1.9rem]"> &#x2022; Do not hesitate to write to me if you think I can help: I urge you to do it. Throughout my life, I have been spoiled with divine mentors; but so many people do not get to be as lucky as I have. You can write to me about science, immigration, queerness, academia, college, or anything else that’s on your mind. I want to help if I can and pay forward the kindness that has been shown to me.
              </p>

            </div>
          </div>
        </div>
      
    </main>
  )
}
