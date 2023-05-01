'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TypingText, TitleText, NewFeatures } from '../components';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { newFeatures } from '../constants';
import styles from '../styles';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's New?" textStyles="text-center" />
        <TitleText title={<>What's new about Metaversus?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src="/whats-new.png"
          alt="whats-new"
          className="w-[90%] h-[90%] object-contain"
          width={500}
          height={500}
          quality={100}
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
