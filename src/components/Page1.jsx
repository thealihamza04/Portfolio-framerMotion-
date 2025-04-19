import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";

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
  const rotateBlock3 = useTransform(block1Progress, [0, 1], ["0deg", "360deg"]);
  const isInView = useInView(ref, { margin: "-80%" });

  return (
    <div className='overflow-x-hidden'>
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
        className='h-[100vh] flex items-center justify-center bg-gray-50 !overflow-x-hidden'
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-200px" }}
        >
          <h1 className='text-[10rem] font-extrabold'>AH</h1>
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
      <section className='h-[100vh] flex items-center '>
        <motion.div
          className='flex  flex-col'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-20% 0%", amount: 0.5 }}
        >
          <h1 className='text-4xl font-bold text-center'>
            Hello I am Ali Hamza
          </h1>
          {/* <h1 className='text-4xl font-bold'>Hello World</h1> */}
          <p className='px-8 md:px-40 mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            blanditiis atque in provident, saepe debitis ex, ratione beatae
            impedit labore nemo, praesentium nam nesciunt modi vero eum minima
            corrupti aspernatur possimus. Earum tempora, corrupti neque fuga
            iste facere distinctio, eaque consequatur impedit quam perferendis.
            Eius dolorem distinctio id rerum sunt, maiores dolor obcaecati iste
          </p>
        </motion.div>
      </section>
      {/* undefined */}
      <section
        className='h-[100vh] bg-gray-50 flex flex-row items-center justify-center gap-4'
        ref={block1}
      >
        {/* <motion.div
          className='w-20 h-20 bg-red-400 '
          initial={{ x: isMobile ? "-150%" : "-300%" }}
          whileInView={{ x: "0%" }}
          style={{ rotate: rotateBlock1 }}
        ></motion.div> */}
        <motion.div
          className='w-20 h-20 bg-red-400 '
          initial={{ x: isMobile ? "-150%" : "-300%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5 }}
          style={{ rotate: rotateBlock1 }}
        ></motion.div>
        <motion.div
          className='w-20 h-20 bg-gray-500'
          style={{ rotate: rotateBlock2 }}
        ></motion.div>
        <motion.div
          className='w-20 h-20 bg-red-400'
          initial={{ x: isMobile ? "150%" : "300%" }}
          whileInView={{ x: "0%" }}
          transition={{ duration: 0.5 }}
          style={{ rotate: rotateBlock3 }}
        ></motion.div>
      </section>
      <section className='h-[100vh]'></section>
    </div>
  );
};

export default Page1;
