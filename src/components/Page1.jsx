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
            Hello, I'm Ali Hamza
          </h1>
          {/* <h1 className='text-4xl font-bold'>Hello World</h1> */}
          <p className='px-8 md:px-40 mt-4'>
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
        className='h-screen  bg-gray-50 flex flex-col items-center justify-center'
        ref={block1}
      >
        <h1 className='text-3xl mb-4 font-bold'>Projects</h1>
        <div className='flex flex-row items-center justify-center gap-4 '>
          <motion.div
            className='w-20 h-20 bg-red-400'
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
        </div>
      </section>
      {/* projects */}
      <section className='h-[300vh]' ref={container}>
        <motion.div
          className='h-screen sticky top-0 -z-20 bg-gray-200 flex flex-col md:flex-row px-8 md:px-20 items-center justify-between rounded-lg'
          scrollYProgress={scrollYProgressforprojects}
          style={{ scale: scaleforproject }}
        >
          <div>
            <h1 className='text-2xl font-bold'>Quote of the Day</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
              ex eius vitae totam itaque, doloremque id, modi quod similique
              suscipit laboriosam dolore illo reprehenderit nobis deserunt
              accusantium praesentium dolorum qui?
            </p>
          </div>
          <div>
            <img
              src='https://images.app.goo.gl/Vi1d8G3WcNfWg15V9'
              alt='image'
              className='bg-amber-100 rounded-lg -rotate-2'
              width={600}
              height={400}
            />
          </div>
        </motion.div>
        <div className='h-[200vh]' ref={container2}>
          <motion.div
            className='h-screen bg-gray-100 sticky -z-10 top-0  flex flex-col md:flex-row px-8 md:px-20 items-center justify-between rounded-lg'
            scrollYProgress={scrollYProgressforprojects}
            style={{ scale: scaleForContainer2 }}
          >
            <div>
              <h1 className='text-2xl font-bold'>Big Brains</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore ex eius vitae totam itaque, doloremque id, modi quod
                similique suscipit laboriosam dolore illo reprehenderit nobis
                deserunt accusantium praesentium dolorum qui?
              </p>
            </div>
            <div>
              <img
                src='https://images.app.goo.gl/Vi1d8G3WcNfWg15V9'
                alt='image'
                className='bg-amber-100 rounded-lg -rotate-2'
                width={600}
                height={400}
              />
            </div>
          </motion.div>
          <motion.div
            className='h-screen bg-gray-400   flex flex-col md:flex-row px-8 md:px-20 items-center justify-between '
            scrollYProgress={scrollYProgressforprojects}
          >
            <div>
              <h1 className='text-2xl font-bold'>Quizzing webApp</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tempore ex eius vitae totam itaque, doloremque id, modi quod
                similique suscipit laboriosam dolore illo reprehenderit nobis
                deserunt accusantium praesentium dolorum qui?
              </p>
            </div>
            <div>
              <img
                src='https://images.app.goo.gl/Vi1d8G3WcNfWg15V9'
                alt='image'
                className='bg-amber-100 rounded-lg -rotate-2'
                width={600}
                height={400}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page1;
