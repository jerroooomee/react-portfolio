"use client";
import Head from "next/head";
import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import {BsFillMoonStarsFill, BsFillPuzzleFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import Image from "next/image";
import jerome from '../public/jerome.png';
import {PuzzlePieceIcon} from '@heroicons/react/24/solid';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
      <title>Jerome Carr's Portfolio</title>
      </Head>
      <main className= "bg-zinc-200 px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyJerome</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer"/>
              </li>
              <li>
                <a className=" bg bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#">Resume</a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Jerome Carr</h2>
            <h3 className="text-2xl py-2">Front and Back End Developer</h3>
            <p className="text-xl py-5 leading-8 text-gray-800">
              Electrical and Computer Engineer.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <AiFillLinkedin/>
            <AiFillInstagram/>
          </div>
          <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
            <div className="md:w-1/2 px-5">
            <h3 className="text-5xl py-1">About Me </h3> 
            <p className="text-2xl  text-gray-800 max-w-xl">
            Jerome Carr, a 23 year old Ohio State University student studying electrical and computer engineering,
             is originally from Ghana and currently resides in Columbus, Ohio. Passion and tenacity have characterized
              his engineering career, but there have been setbacks as well. In addition to his academic duties, 
              Jerome works at Amazon as a Process Assistant, where he honed his problem-solving abilities and 
              discovered the value of efficiency in a hectic sstting. Jerome has had to exercise perseverance in 
              juggling his demanding work and hard coursework, but he is still motivated by his passion for 
              innovation and technology. His resilience has been bolstered by this dual experience, positioning 
              him for a future where he intends to combine his academic background with real-world industry views.
            </p>
            </div>
            <div className="w-[380px] h-[700px] relative mx-auto rounded-lg overflow-hidden">
            <Image src={jerome} layout="fill" objectFit="cover"/>
          </div>
          </section>
          <section>
            <h4 className="text-5xl py-5 items-center"><PuzzlePieceIcon className="h-12 w-12 r-2 text-teal-600" /> Projects</h4>
            <h5 className="text-4xl py-1 items-center">Personal Portfolio Website</h5>
            <p className="text-2xl text-gray-800 max-w-xl">
            Designed and developed a portfolio website using HTML,
             CSS, and React.js to showcase my projects and skills. 
             The site features a responsive design, interactive project
              displays, and a contact form, providing a professional 
              platform to highlight my work and experience
            </p>
        </section>
        </section>
        </main>    
    </div>
  );
}
