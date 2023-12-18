import Image from 'next/image'
import Header from '../../components/Header';

export default function Home() {
  return (
    <main className="">
      <div className="bg-white border-b border-gray-300">
      <Header current="Publications" />
      </div>
      <div className="py-6 px-1 max-w-7xl mx-auto">
          <div className="pb-[1rem]">
            <p className="text-black text-[2.2rem] font-bold font-mono text-start pl-4 md:pl-0 uppercase tracking-wide text-center md:text-start">Publications</p>
          </div>
          <div className="pb-[1.2rem]">
            <p className="text-black text-[1.3rem] font-bold font-mono text-start pl-4 md:pl-0 uppercase tracking-wide">JOURNAL PUBLICATIONS</p>
          </div>
          <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
            <p className="text-black font-mono"><span className="underline custom-underline-animation cursor-pointer hover:no-underline z-[-20] md:z-[20]"  >Poliak, M., Ryskin, R., Braginsky, M., & Gibson, E. (2023).</span> It is not what you say but how you say it: Evidence from Russian shows robust effects of the structural prior on noisy channel inferences. Journal of Experimental Psychology: Learning, Memory, and Cognition.
            </p>

          </div>
          <div className="pb-[1.2rem] mt-6 leading-[1.9rem] px-4 md:px-0">
            <p className="text-black text-[1.3rem] tracking-wide font-semibold font-mono text-start uppercase">POSTERS & ABSTRACTS</p>
            
          </div>
          <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
            <p className="text-black font-mono"><span className="underline custom-underline-animation cursor-pointer hover:no-underline">Poliak, M., Ryskin, R., Braginsky, M., & Gibson, E. (2023).</span> It is not what you say but how you say it: Evidence from Russian shows robust effects of the structural prior on noisy channel inferences. Journal of Experimental Psychology: Learning, Memory, and Cognition.
            </p>

          </div>
          <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
            <p className="text-black font-mono"><span className="underline custom-underline-animation cursor-pointer hover:no-underline">Poliak, M., Ryskin, R., Braginsky, M., & Gibson, E. (2023).</span> It is not what you say but how you say it: Evidence from Russian shows robust effects of the structural prior on noisy channel inferences. Journal of Experimental Psychology: Learning, Memory, and Cognition.
            </p>

          </div>
          <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
            <p className="text-black font-mono"><span className="underline custom-underline-animation cursor-pointer hover:no-underline">Poliak, M., Ryskin, R., Braginsky, M., & Gibson, E. (2023).</span> It is not what you say but how you say it: Evidence from Russian shows robust effects of the structural prior on noisy channel inferences. Journal of Experimental Psychology: Learning, Memory, and Cognition.
            </p>

          </div>
          <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
            <p className="text-black font-mono"><span className="underline custom-underline-animation cursor-pointer hover:no-underline">Poliak, M., Ryskin, R., Braginsky, M., & Gibson, E. (2023).</span> It is not what you say but how you say it: Evidence from Russian shows robust effects of the structural prior on noisy channel inferences. Journal of Experimental Psychology: Learning, Memory, and Cognition.
            </p>

          </div>
        </div>
    </main>
  )
}
