import Image from 'next/image'
import Header from '../../components/Header';

export default function Home() {
  return (
    <main className="">
      <div className="bg-white border-b border-gray-300">
        <Header current="Resources" />
      </div>
      <div className="py-6 px-1 max-w-7xl mx-auto">
        <div className="pb-[1rem]">
          <p className="text-black text-[2.2rem] font-bold font-mono text-start pl-4 md:pl-0 uppercase tracking-wide text-center md:text-start">RESOURCES</p>
        </div>
        <div className="pb-[1rem]">
          <p className="text-black text-[1.3rem] font-bold font-mono text-start pl-4 md:pl-0 uppercase tracking-wide">GRAD SCHOOL APPLICATIONS
          </p>
        </div>
        <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <p className="text-black font-mono">My grad school application process was greatly facilitated by having access to amazing resources. As an undergrad at Harvard, I had access to influential professors both at Harvard and elsewhere, kind and knowledgeable grad student mentors, courses at other institutions, funding for travel and research, and so on. I am endlessly grateful to all those people who worked very hard to help me. At the same time, this underscores how much privilege I have and how much an uneven playing field grad school applications are. In this page, I tried to gather some resources that I think can be helpful to people who want to apply to grad school in psychology (or something similar). Hope you find it helpful, and feel free to contact me via email if you want to talk more :)
          </p>

        </div>
        <div className="pb-[1rem] mt-6 leading-[1.9rem] px-4 md:px-0">
          <p className="text-black text-[1.1rem] tracking-wide font-semibold font-mono text-start uppercase">PRO-TIP</p>

        </div>
        <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <p className="text-black font-mono">The Harvard psychology department produced several videos with invaluable information. These are interviews with faculty, who describe what they look for in grad school applications. I found this super useful, and it will be useful for applying to many psychology departments, not just Harvard.
          </p>

        </div>
        <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <div>
            <a href="https://psychology.fas.harvard.edu/pro-tip" target="_blank" className="underline text-black font-mono custom-underline-animation cursor-pointer hover:no-underline">PRO-TIP</a>
          </div>
        </div>

        <div className="pb-[1rem] mt-6 leading-[1.9rem] px-4 md:px-0">
          <p className="text-black text-[1.1rem] tracking-wide font-semibold font-mono text-start uppercase">HARVARD PSYCHOLOGY PPREP & MIT BCS AAP</p>

        </div>
        <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <p className="text-black font-mono">These are two application assistance programs where you can meet with people from either Harvard Psychology or MIT BCS and get help with your grad school applications (in case there was any doubt, this is free). Of course you should reach out and do this, because you get (1) advice, (2) someone to read your SOP, (3) insight into the department. You don’t need to apply to Harvard/MIT to use these resources.
          </p>

        </div>
        <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <div>
            <a href="https://psychology.fas.harvard.edu/pro-tip" target="_blank" className="underline text-black font-mono custom-underline-animation cursor-pointer hover:no-underline">Harvard Psychology PPREP</a>
          </div>
        </div>

        <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <div>
            <a href="https://psychology.fas.harvard.edu/pro-tip" target="_blank" className="underline text-black font-mono custom-underline-animation cursor-pointer hover:no-underline">MIT BCS AAP</a>
          </div>
        </div>


        <div className="pb-[1rem] mt-6 leading-[1.9rem] px-4 md:px-0">
          <p className="text-black text-[1.1rem] tracking-wide font-semibold font-mono text-start uppercase">MY APPLICATION MATERIALS</p>

        </div>
        <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <p className="text-black font-mono">I’m sure there are many ways to improve my application materials. Still, they got me in, so maybe they can help you in some way. Here are two things to note:
          </p>

        </div>
        <div className="leading-[1.9rem] mt-2 px-4 md:px-0">
          <p className="text-black font-mono"><span className="font-bold">1. </span>Statements of Purpose (SOP) usually have three parts: (a) My question is…, (b) I have experience and skills to show that I have the tools and persistence to study this question, (c) I want to work with Professor X in institution Y because… Parts a & c are usually one paragraph, and the majority of the statement is part b.
          </p>
        </div>
        <div className="leading-[1.9rem] mt-2 px-4 md:px-0">
          <p className="text-black font-mono"><span className="font-bold">2. </span>I found reaching out to professors useful (not everyone does), but it should be done with care. Often, an email with a message like “I read your paper now let’s meet to talk” is not seen favorably by professors (in contrast, grad students would often love to receive an email like this). Instead, a more acceptable message is an inquiry about whether the professor is admitting students this year. This is good for you, because (a) then you know where to apply or not, saving time and money, and (b) this will familiarize your potential advisor with your name, so it sticks out more when they go through applications.
          </p>
        </div>
        <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <div>
            <a href="https://psychology.fas.harvard.edu/pro-tip" target="_blank" className="underline text-black font-mono custom-underline-animation cursor-pointer hover:no-underline">My SOP for MIT</a>
          </div>
        </div>

        <div className="space-y-2 mt-2  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <div>
            <a href="https://psychology.fas.harvard.edu/pro-tip" target="_blank" className="underline text-black font-mono custom-underline-animation cursor-pointer hover:no-underline">My letters to two professors whom I applied to work with (identifying information is reducted)</a>
          </div>
        </div>

        <div className="pb-[1rem] mt-6">
          <p className="text-black text-[1.4rem] font-bold font-mono text-start pl-4 md:pl-0 uppercase tracking-wide">Statistics
          </p>
        </div>
        <div className="space-y-2 ml-0  flex flex-col leading-[1.9rem] px-4 md:px-0">
          <p className="text-black font-mono">Knowing how to do data manipulation and basic stats catapults you from the pool of people who have good intentions onto the stage where stand people who can conduct quantiative research. Data are everywhere, and being stats-literate means you can look at these data, learn from them, and communicate them. When it comes to grad school applications, I’ve heard several professors say that, first and foremost, they want potential grad students to have a good enough statistical toolbox to tackle their research questions. This doesn’t mean you now need to take difficult probability theory courses (though I do feel like I benefitted from putting myself through it), but it does mean that it would be a good start to learn to do stats in R, manipulate data (usually using tidyverse in R), and fit linear models (starting with simple regressions).
          </p>
          <p className="text-black font-mono mt-2">If you are totally new to statistics, I highly recommend the friendly and witty Field, A., Miles, J., & Field, Z. (2012). Discovering Statistics Using R. London, UK: Sage.
          </p>
          <p className="text-black font-mono mt-2">If you already know your regressions and p-values, another good thing you can do for yourself is learn Bayesian stats, which are in most ways better than frequentist stats and are growing in popularity in psychology. Specifically, the BRMS package in R will be useful (Stan is usually overkill). A dense but useful book is McElreath, R. (2020). Statistical Rethinking: A Bayesian Course with Examples in R and Stan (2nd ed.). CRC Press.
          </p>
        </div>
      </div>
    </main>
  )
}
