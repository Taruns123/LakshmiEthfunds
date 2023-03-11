import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full' >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' back-ground-apla rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const Hero = () => {
  return (
    <section  className={`relative w-full h-screen mx-auto`} style={{backgroundColor: "rgba(21, 16, 48, 1)"}}>
      <div 
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4ADE80]' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
             <span className='text-[#4ADE80]'>BOST</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Cleaning waste   <br className='sm:block hidden' />
          together for<br></br>
          a brighter future!
          </p>
        </div>
      </div>

      
      <EarthCanvas/>
      

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
<div className="container" style={{backgroundColor: "rgba(21, 16, 48, 1)"}}>

    <motion.div variants={textVariant()} style={{backgroundColor: "rgba(21, 16, 48, 1)"}}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p style={{backgroundColor: "rgba(21, 16, 48, 1)"}}
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        To tackle the problem of waste management this project implements DAO over the solana blockchain to create a community where people can post a bounty where IoT endpoints would be used for real time tracking and verification The responsible people may claim the bounty provided they satisfy the required conditions for the available bounties. The  Solana network would help to keep the transparency and security in order to eliminate the centralized entity structure. 

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10' style={{backgroundColor: "rgba(21, 16, 48, 1)"}}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
</div>
    </section>
  );
};

export default Hero;
