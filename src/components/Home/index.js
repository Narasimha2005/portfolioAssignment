import React from 'react';
import Typed from 'typed.js'; // For animated typing effect
import Spline from '@splinetool/react-spline'; // 3D scene integration

// Social Icons
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

// Internal Components
import Navbar from "../Navbar";
import AchievementCard from '../AchievementCard';
import Skills from '../About/index.js';
import Projects from '../Projects';
import Contact from '../Contact';
import {
  Heading, Robot, Homepage, MainContainer, HomeContainer, Profession,
  Description, ResumeButton, LinkButton, Achievements, Box, SubBox, Dot
} from './style.js';
import ThemeContext from '../../context/ThemeContext.js';

// Achievements to showcase below hero section
const achievements = [
  { id: '1', heading: '1000+', description: 'Coding Problems' },
  { id: '2', heading: '30+', description: 'Projects' },
  { id: '3', heading: '1+', description: 'Years Experience' },
  { id: '4', heading: '9.55', description: 'CGPA' },
];

const Home = () => {
  const el = React.useRef(null);     // Ref for Typed.js element
  const typed = React.useRef(null);  // Store Typed instance

  // Initialize typing effect on mount
  React.useEffect(() => {
    const options = {
      strings: ['a Cyber Security Learner', 'a Coder', 'an AI Enthusiast', 'a Full Stack Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => typed.current.destroy(); // Cleanup on unmount
  }, []);

  return (
    <ThemeContext.Consumer>
      {value => (
        <Homepage theme={value.theme}>
          {/* Navbar */}
          <Navbar />

          {/* Hero Section */}
          <div>
            <MainContainer>
              <HomeContainer>
                <Heading theme={value.theme}>
                  HI! I'm Narasimha Charyulu
                </Heading>

                {/* Typing effect section */}
                <Profession>
                  <span style={{ color: value.theme === 'light' ? '#000' : '#FFF' }}>I am </span>
                  <span ref={el} />
                </Profession>

                <Description theme={value.theme}>
                  I break down complex user experience problems to create integrity-focused solutions that connect billions of people
                </Description>

                {/* Resume and Social Links */}
                <div style={{ display: 'flex' }}>
                  <ResumeButton theme={value.theme} href="resume.pdf" download>
                    Download Resume
                  </ResumeButton>
                  <LinkButton theme={value.theme} href="https://api.whatsapp.com/send?phone=9490588867&text=Hi I am interested to work with you" target="_blank"><FaWhatsapp /></LinkButton>
                  <LinkButton theme={value.theme} href="https://github.com/Narasimha2005" target="_blank"><FaGithub /></LinkButton>
                  <LinkButton theme={value.theme} href="https://www.linkedin.com/in/narasimhachitturi" target="_blank"><FaLinkedinIn /></LinkButton>
                </div>
              </HomeContainer>

              {/* 3D Robot using Spline */}
              <Robot>
                <Spline scene="https://prod.spline.design/J0cGADXIUOqtiPuy/scene.splinecode" />
              </Robot>
            </MainContainer>

            {/* Achievements Grid */}
            <Achievements>
              {achievements.map(eachItem => (
                <AchievementCard key={eachItem.id} details={eachItem} />
              ))}
            </Achievements>
          </div>

          {/* About Section */}
          <div id="about">
            <Skills />
          </div>

          {/* Projects Showcase */}
          <div id="projects">
            <Projects />
          </div>

          {/* Contact Form */}
          <div id="contact">
            <Contact />
          </div>

          {/* Aesthetic background dots */}
          <Box>
            {[...Array(10)].map((_, i) => (
              <SubBox key={i}><Dot /></SubBox>
            ))}
          </Box>
        </Homepage>
      )}
    </ThemeContext.Consumer>
  );
};

export default Home;
