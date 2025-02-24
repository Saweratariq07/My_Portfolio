import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who We Are</p>
                    <p className='heading-text'>About Us</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                             <p>Welcome to UTS Hub, the platform of choice for online success, digital expansion, and affiliate marketing! We are Usman, Taha, and Sadam, a group of enthusiastic web developers, affiliate marketing specialists, and digital marketers committed to assisting companies in thriving in the digital sphere. At UTS Hub, our areas of expertise include: 
<p>✅ Affiliate Marketing: promoting deals and products with high conversion rates </p>
<p>✅ Digital Marketing: SEO, social media tactics, and online branding </p>
<p>✅ Web Development: Developing slick, high-performing websites </p>
<p>✅ Lead Generation & Online Growth: assisting businesses in growing through creative solutions Our goal is to use the power of digital methods to close the gap between companies and their target market. UTS Hub is here to help you succeed, whether you're an individual searching for passive income or a brand trying to grow.Join us on this journey and let’s grow together in the digital world!</p>
</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
