import React, {useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion, useReducedMotion } from "framer-motion";
import SectionOneHero from "./SectionOneHero";
import BlueprintProfileSection from "./BlueprintProfileSection";
import BlueprintWorkRecordSection from "./BlueprintWorkRecordSection";
import BlueprintTechnicalSystemSection from "./BlueprintTechnicalSystemSection";
import BlueprintSelectedWorkSection from "./BlueprintSelectedWorkSection";
import BlueprintFooterRow from "./BlueprintFooterRow";
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
      <main className="blueprint-page">
        <motion.div
          ref={aboutRef}
          className="snapaboutdiv panel-reveal"
          {...reveal(0.05)}
        >
          <BlueprintProfileSection />
        </motion.div>

        <motion.div className="panel-reveal" {...reveal(0.08)}>
          <BlueprintWorkRecordSection />
        </motion.div>

        <motion.div className="panel-reveal" {...reveal(0.1)}>
          <BlueprintTechnicalSystemSection />
        </motion.div>

        <motion.div
          ref={servicesRef}
          className="snapaboutdiv panel-reveal"
          {...reveal(0.12)}
        >
          <BlueprintSelectedWorkSection />
        </motion.div>

        <motion.div className="panel-reveal" {...reveal(0.14)}>
          <BlueprintFooterRow />
        </motion.div>
      </main>
    </div>
  );
}

export default Home;
