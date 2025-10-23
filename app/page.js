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
    <div className={darkMode ? "dark" : ""}>
      <Head>
      <title>Jerome Carr's Portfolio</title>
      </Head>
      <main className="bg-zinc-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 md:px-12 transition-colors duration-300 max-w-7xl mx-auto">
      <section className="py-10">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyJerome</h1>
            <ul className="flex items-center">
            <li>
              {darkMode ? (
                <BsSunFill
                  className="cursor-pointer text-2xl hover:text-teal-400 transition"
                  onClick={() => setDarkMode(false)}
                />
              ) : (
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl hover:text-teal-400 transition"
                  onClick={() => setDarkMode(true)}
                />
              )}
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
          <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-20 px-5 py-16 max-w-6xl mx-auto">
          <div className="md:w-2/3 text-left">
            <h3 className="text-4xl font-semibold mb-6 text-gray-900 dark:text-gray-100">About Me</h3>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Jerome Carr, a 23-year-old Ohio State University student studying electrical and computer engineering,
              is originally from Ghana and currently resides in Columbus, Ohio. Passion and tenacity have characterized
              his engineering career, but there have been setbacks as well. In addition to his academic duties, Jerome
              works at Amazon as a Process Assistant, where he honed his problem-solving abilities and discovered the
              value of efficiency in a hectic setting. Jerome has had to exercise perseverance in juggling his demanding
              work and coursework, but he is still motivated by his passion for innovation and technology. His resilience
              has been bolstered by this dual experience, positioning him for a future where he intends to combine his
              academic background with real-world industry views.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-72 h-96 rounded-lg overflow-hidden shadow-lg">
              <Image src={jerome} layout="fill" objectFit="cover" alt="Jerome Carr" />
            </div>
          </div>
          </section>
          {/* Projects Section */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 px-5 py-20 max-w-6xl mx-auto">
          <div className="md:w-1/2">
            <h4 className="uppercase text-4xl font-bold tracking-wide text-gray-900 dark:text-gray-100 flex items-center gap-3 mb-6">
              <PuzzlePieceIcon className="h-10 w-10 text-teal-600" />
              Projects
            </h4>
            <h5 className="text-2xl font-semibold mb-4 text-teal-600">Personal Portfolio Website</h5>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Designed and developed a personal portfolio website using HTML, CSS, and React.js to showcase my projects and skills. 
              The site features a responsive layout, smooth dark-mode toggle, and a contact form — providing a professional platform
              to highlight my work and experience.
            </p>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-5 py-2 rounded-md font-medium hover:opacity-90 transition"
            >
              View Project
            </a>
          </div>
        </section>
        <section id="contact" className="py-10 text-center">
        <h4 className="text-4xl font-semibold text-teal-500 mb-6">
          Contact Me
        </h4>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Have a project or opportunity? Let’s connect!
        </p>
        <form
          action="https://formspree.io/f/mnqejpze"  // replace with your Formspree link
          method="POST"
          className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-3 rounded-md border dark:border-gray-700 bg-gray-50 dark:bg-gray-900"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
      {}
      <footer className="text-center py-8 text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
        <p>© {new Date().getFullYear()} Jerome Carr — All Rights Reserved.</p>
      </footer>
        </section>
        </main>    
    </div>
  );
}
