import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosHappy } from "react-icons/io";
import { TbMoodCrazyHappyFilled } from "react-icons/tb";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaCircleNodes } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFramer } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { TfiThemifyFaviconAlt } from "react-icons/tfi";

const Page1 = () => {
  const isMobile = window.innerWidth < 768;
  const ref = useRef(null);
  const block1 = useRef(null);
  const { scrollYProgress } = useScroll(); // its value is between 1-0
  const { scrollYProgress: block1Progress } = useScroll({
    target: block1,
    offset: ["start end", "end start"],
  });
  const rotateBlock1 = useTransform(block1Progress, [0, 1], ["0deg", "360deg"]);
  const rotateBlock2 = useTransform(block1Progress, [0, 1], ["0deg", "180deg"]);
  const rotateBlock3 = useTransform(block1Progress, [0, 1], ["0deg", "90deg"]);
  const isInView = useInView(ref, { margin: "-80%" });

  const container = useRef(null);
  const container2 = useRef(null);

  const { scrollYProgress: scrollYProgressforprojects } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollYProgressforcontainer2 } = useScroll({
    target: container2,
    offset: ["start start", "end end"],
  });

  const scaleforproject = useTransform(
    scrollYProgressforprojects,
    [0, 1],
    [1, 0.8]
  );

  const scaleForContainer2 = useTransform(
    scrollYProgressforcontainer2,
    [0, 1],
    [1, 0.8]
  );

  return (
    <div className=' '>
      {/* horizontal line  */}
      <section>
        <motion.div
          className='fixed left-0 bottom-0 w-screen h-2 rounded-full bg-gray-500 origin-left z-50'
          style={{
            scaleX: scrollYProgress,
          }}
        ></motion.div>
      </section>
      {/* intro */}
      <section
        ref={ref}
        className='min-h-screen flex items-center justify-center bg-gray-50 !overflow-x-hidden'
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-20px 0px" }}
        >
          <h1 className='text-[10rem] quicksand-bold '>AH</h1>
        </motion.div>

        <div className='absolute flex flex-row  w-full justify-center'>
          <motion.div
            className='w-40 h-40 bg-gray-400'
            animate={{ x: isInView ? "-100%" : "0%" }}
          ></motion.div>
          <motion.div
            className='w-40 h-40 bg-red-400'
            animate={{ x: isInView ? "100%" : "0%" }}
          ></motion.div>
        </div>
      </section>
      {/* about me */}
      <section className='min-h-screen flex items-center px-8 md:px-40'>
        <motion.div
          className='flex  flex-col'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-20% 0%", amount: 0.5 }}
        >
          <h1 className='text-4xl flex flex-col quicksand-bold'>
            <span> Hello,</span>
            <span>I'm Ali Hamza</span>
          </h1>
          {/* <h1 className='text-4xl font-bold'>Hello World</h1> */}
          <p className=' mt-4 quicksand-regular'>
            Over the past year, I’ve worked on real-world projects, collaborated
            on GitHub, and explored both frontend and backend development. From
            designing smooth UIs to writing clean APIs, I enjoy every step of
            building full-stack apps. I believe in continuous learning and
            turning creative ideas into working solutions. Now, I’ve started
            working with Framer Motion for better UX and smooth animations.
          </p>
        </motion.div>
      </section>
      {/* undefined */}
      <section
        className='h-screen  bg-gray-50 flex flex-col items-center justify-center overflow-hidden '
        ref={block1}
      >
        <h1 className='text-[3rem] mb-4 font-bold quicksand-bold'>Projects</h1>
        <div className='grid grid-cols-3 md:grid-cols-3  gap-4 opacity-70'>
          <motion.div
            className='w-20 h-20  flex items-center justify-center text-7xl'
            initial={{ x: isMobile ? "-150%" : "-300%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            // style={{ rotate: rotateBlock1 }}
          >
            <IoIosHappy />
          </motion.div>
          <motion.div
            className='w-20 h-20  flex items-center justify-center text-7xl'
            initial={{ x: isMobile ? "150%" : "300%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            style={{ rotate: rotateBlock1 }}
          >
            <FaCircleNodes />
          </motion.div>
          <motion.div
            className='w-20 h-20  flex items-center justify-center text-7xl'
            initial={{ x: isMobile ? "150%" : "400%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 2 }}
            style={{ rotate: rotateBlock3 }}
          >
            <DiMongodb />
          </motion.div>
          <motion.div
            className='w-20 h-20  flex items-center justify-center text-7xl'
            initial={{ x: isMobile ? "150%" : "-400%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            // style={{ rotate: rotateBlock3 }}
          >
            <RiTailwindCssFill />
          </motion.div>
          <motion.div
            className='w-20 h-20  flex items-center justify-center text-7xl'
            initial={{ x: isMobile ? "150%" : "400%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            // style={{ rotate: rotateBlock3 }}
          >
            <SiFramer />
          </motion.div>
          <motion.div
            className='w-20 h-20  flex items-center justify-center text-7xl'
            initial={{ x: isMobile ? "150%" : "-400%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            // style={{ rotate: rotateBlock3 }}
          >
            <SiDaisyui />
          </motion.div>
        </div>
      </section>
      {/* projects */}
      <section className='min-h-[300lvh] -z-30 bg-gray-200' ref={container}>
        <motion.div
          className='min-h-screen sticky top-0 z-10 bg-[#ffffff] flex flex-col md:flex-row px-8 md:px-20 items-center justify-center rounded-lg gap-4'
          scrollYProgress={scrollYProgressforprojects}
          style={{ scale: scaleforproject }}
        >
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold quicksand-bold'>
              Quote of the Day
            </h1>
            <ul className='list-decimal tracking-wide opacity-70 font-thin pl-4 quicksand-regular'>
              <li> Generates random inspirational quotes using API</li>
              <li> Simple and clean UI for better experience</li>
              <li> Get a new quote with one click</li>
              <li> Fully responsive design for all devices</li>
            </ul>
            <div className=''>
              <a
                href='https://rq-generator.vercel.app/'
                target='_blank'
                className='flex flex-row items-center text-xs opacity-45 group'
              >
                Live Demo
                <FaLocationArrow className='mt-1 group-hover:rotate-45 group-hover:ml-3 transition-all duration-300 ease-[cubic-bezier(.59,0,.92,.09)]' />
                <span className='opacity-0 group-hover:opacity-55 transition-all duration-300 ml-3 coursor-none'>
                  https://rq-generator.vercel.app/
                </span>
              </a>
            </div>
          </div>
          <div className=''>
            <img
              src='../../q3.jpeg'
              alt='image'
              className=' rounded-lg md:-rotate-2 w-[300px] h-[270px] md:w-[490px] md:h-[400px]'
            />
          </div>
        </motion.div>
        <div className='min-h-[200lvh] z-50 bg-gray-200' ref={container2}>
          <motion.div
            className='min-h-screen bg-[#ffffff] sticky z-20 top-0 flex flex-col-reverse md:flex-row-reverse px-8 md:px-20 items-center justify-center rounded-lg gap-4'
            scrollYProgress={scrollYProgressforprojects}
            style={{ scale: scaleForContainer2 }}
          >
            <div className='flex flex-col gap-4'>
              <h1 className='text-2xl font-bold quicksand-bold hidden'>
                Quote of the Day
              </h1>
              <ul className='list-decimal tracking-wide opacity-70 font-thin pl-4 quicksand-regular'>
                <li>Online tech course-selling platform</li>
                <li>Simple and clean UI for better experience</li>
                <li>Secure user authentication and dashboard</li>
                <li>Fully responsive design for all devices</li>
                <li>Explore, purchase, and learn from tech courses</li>
              </ul>
              <div className=''>
                <a
                  href='https://bigbrainss.vercel.app/'
                  target='_blank'
                  className='flex flex-row items-center text-xs opacity-45 group'
                >
                  Live Demo
                  <FaLocationArrow className='mt-1 group-hover:rotate-45 group-hover:ml-3 transition-all duration-300 ease-[cubic-bezier(.59,0,.92,.09)]' />
                  <span className='opacity-0 group-hover:opacity-55 transition-all duration-300 ml-3 user-select-none'>
                    https://bigbrainss.vercel.app/
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img
                src='../../bb5.jpeg'
                alt='image'
                className='bg-amber-100 rounded-lg md:-rotate-2 w-[300px] h-[290px] md:w-[600px] md:h-[540px]'
              />
            </div>
          </motion.div>
          <motion.div
            className='min-h-screen bg-[#fff] sticky top-0 z-30 flex flex-col md:flex-row px-8 md:px-20 items-center justify-center gap-4'
            scrollYProgress={scrollYProgressforprojects}
          >
            <div className='flex flex-col gap-4'>
              <h1 className='text-2xl font-bold quicksand-bold '>
                Quizzing webapp
              </h1>
              <ul className='list-decimal tracking-wide opacity-70 font-thin pl-4 quicksand-regular'>
                <li>
                  Quizzing WebApp to create and solve different types of
                  quizzes.
                </li>
                <li>Supports MCQs, True/False, and Short Answer questions.</li>
                <li>Tracks question complexity and user performance.</li>
                <li>
                  Handles repeated incorrect questions for better learning.
                </li>
                <li> Built using React, TailwindCSS, and DaisyUI.</li>
              </ul>
              <div className=''>
                <a
                  href='https://quizzing-webapp.vercel.app/'
                  target='_blank'
                  className='flex flex-row items-center text-xs opacity-45 group'
                >
                  Live Demo
                  <FaLocationArrow className='mt-1 group-hover:rotate-45 group-hover:ml-3 transition-all duration-300 ease-[cubic-bezier(.59,0,.92,.09)]' />
                  <span className='opacity-0 group-hover:opacity-55 transition-all duration-300 ml-3 user-select-none'>
                    https://quizzing-webapp.vercel.app/
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img
                src='../../qa6.jpeg'
                alt='image'
                className=' rounded-lg md:-rotate-2 w-[300px] h-[280px] md:w-[400px] md:h-[340px]'
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page1;
