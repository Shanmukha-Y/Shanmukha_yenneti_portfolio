'use client';

import Image from 'next/image'
import Header from '../components/Header';
import { FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FADE_DOWN_ANIMATION_VARIANTS } from "../../lib/constants";

export default function Home() {
  return (
    <main className="">
      <div className="bg-white relative border-b border-gray-300">
        <Header current="Home" />
      </div>
      <motion.div initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }} className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-8 md:space-y-2 p-20">

        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="">
          <img className="rounded-full h-[14rem] w-[14rem] md:w-[22rem] md:h-[22rem]" src="/shanmukha.png" />
        </motion.div>
        <div className="">
          <p className="font-mono text-center md:text-start text-[2.8rem] font-bold text-black">
            Shanmukha Yenneti
          </p>
        </div>
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="">
          <p className="font-mono text-center md:text-start text-[1.8rem] font-semibold text-black">
            Applied Computer Vision Scientist @ FLX AI, Inc.
             {/* | Object Recognition */}
          </p>
        </motion.div>
        {/* <div>
          <SocialIcon url='https://twitter.com/shAanmukha'  bgColor="white" fgColor="black" />
        </div> */}
        <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="pt-[1rem]">
        <a  href="https://twitter.com/shAanmukha" target="_blank">
          <FaTwitter className="w-10 h-10 text-black" />
        </a>
        </motion.div>
      </motion.div>
    </main>
  )
}
