import React, {useEffect} from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from "framer-motion";
import SectionOneHero from "./SectionOneHero";
import "./index.css"
function Home({setActiveSection}) {
  const prefersReducedMotion = useReducedMotion();
  const [homeRef, homeInView] = useInView ({threshold: 0.2});
  const [aboutRef, aboutInView] = useInView ({threshold: 0.1});
  const [servicesRef, servicesInView] = useInView ({threshold: 0.1});

  useEffect(() => {
    if (homeInView) setActiveSection('#home');
    else if (aboutInView) setActiveSection('#about');
    else if (servicesInView) setActiveSection('#work');
  }, [homeInView, aboutInView, servicesInView, setActiveSection]);

  const reveal = (delay = 0) => ({
    initial: prefersReducedMotion ? false : { opacity: 0, y: 16 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  });

  return (
    <div className="containeraboutselector">
      <div ref={homeRef} className="snapaboutdiv" id="home">
        <SectionOneHero />
      </div>
      <div>
        <div className="relative" style={{ backgroundColor: "black" }}>
          <div className="inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-24">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                <motion.div
                  ref={aboutRef}
                  className="snapaboutdiv panel-reveal"
                  id="about"
                  {...reveal(0.05)}
                >
                  <About />
                </motion.div>
                <motion.div
                  ref={servicesRef}
                  className="snapaboutdiv panel-reveal"
                  id="work"
                  {...reveal(0.1)}
                >
                  <Portfolio />
                </motion.div>
                <motion.div id="footer" className="panel-reveal" {...reveal(0.15)}>
                  <Footer />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
