'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People in the World" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <Image
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
          fill
        />

        <div className="absolute bottom-[22%] right-[8%] w-[60px] h-[60px] p-[6px] rounded-full bg-[#5d6680] md:block hidden">
          <Image
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute top-[25%] left-[10%] w-[60px] h-[60px] p-[6px] rounded-full bg-[#5d6680] md:block hidden">
          <Image
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute top-[45%] right-[50%] w-[60px] h-[60px] p-[6px] rounded-full bg-[#5d6680] md:block hidden">
          <Image
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
