"use client";
import CTA_Button from "../cta-button";
import TextHighlighter from "./../../text-highlighter";
import SectionOneCard from "../cards/section-one-card";
import cardList from "../card-list";
import { motion } from "framer-motion";

function SectionOne() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section
      className={`flex flex-col w-full min-h-[150vh] md:min-h-[120vh] lg:min-h-[90vh] md:h-screen dark:bg-neutral-900 bg-white`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      <div className="flex flex-row justify-around items-center basis-1/2 flex-1 overflow-hidden">
        <motion.div
          className="flex flex-col gap-4 items-center flex-1 flex-shrink-0 px-6 sm:px-24 md:px-48 lg:px-12"
          variants={textVariants}
        >
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <span
              style={{ lineHeight: "1.5" }}
              className={`font-Exo text-center lg:text-left font-medium text-2xl sm:text-3xl md:text-4xl dark:text-neutral-300 text-neutral-700`}
            >
              Empowering
              <TextHighlighter
                text="Developers"
                className="text-neutral-700 dark:text-neutral-800 bg-yellow-200 dark:bg-yellow-300"
              />
              and{" "}
              <TextHighlighter
                text="Innovators"
                className="text-neutral-700 dark:text-neutral-800 bg-blue-200 dark:bg-blue-300 ml-0"
              />
              at National Insitute of Technology,
              <TextHighlighter
                text="Hamirpur"
                className="text-neutral-700 dark:text-neutral-800 bg-red-200 dark:bg-red-300"
              />
            </span>
            <span className="font-Exo font-normal text-center lg:text-start text-md dark:text-neutral-300 text-neutral-600">
              Google Developer Student Clubs are university-based communities
              where students collaborate, learn, and solve real-world problems
              with technology.
            </span>
          </div>
        </motion.div>
        <div className="min-h-32 flex-1 flex-shrink-0 justify-center items-center hidden lg:flex"></div>
      </div>
      <motion.div
        className={`flex flex-col sm:grid sm:grid-cols-3 md:grid-cols-3 lg:flex lg:flex-row dark:bg-neutral-800 bg-neutral-200 p-1 gap-1`}
        variants={containerVariants}
      >
        <SectionOneCard className="md:col-start-1 md:col-end-3 items-center hidden lg:flex">
          <CTA_Button />
        </SectionOneCard>
        {cardList.map((card, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SectionOneCard
              image={card.image}
              title={card.title}
              description={card.description}
              className={card.className}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default SectionOne;
