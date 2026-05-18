import React, {useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { useBlueprintMotion } from "./blueprintMotion";
import SectionOneHero from "./SectionOneHero";
import BlueprintProfileSection from "./BlueprintProfileSection";
import BlueprintWorkRecordSection from "./BlueprintWorkRecordSection";
import BlueprintTechnicalSystemSection from "./BlueprintTechnicalSystemSection";
import BlueprintSelectedWorkSection from "./BlueprintSelectedWorkSection";
import BlueprintFooterRow from "./BlueprintFooterRow";
import "./index.css"
function Home({setActiveSection}) {
  const { revealSection } = useBlueprintMotion();
  const [homeRef, homeInView] = useInView ({threshold: 0.2});
  const [aboutRef, aboutInView] = useInView ({threshold: 0.1});
  const [servicesRef, servicesInView] = useInView ({threshold: 0.1});

  useEffect(() => {
    if (homeInView) setActiveSection('#home');
    else if (aboutInView) setActiveSection('#about');
    else if (servicesInView) setActiveSection('#work');
  }, [homeInView, aboutInView, servicesInView, setActiveSection]);

  return (
    <div className="containeraboutselector">
      <div ref={homeRef} className="snapaboutdiv" id="home">
        <SectionOneHero />
      </div>
      <main className="blueprint-page">
        <motion.div
          ref={aboutRef}
          className="snapaboutdiv panel-reveal"
          {...revealSection(0.05)}
        >
          <BlueprintProfileSection />
        </motion.div>

        <motion.div className="panel-reveal" {...revealSection(0.08)}>
          <BlueprintWorkRecordSection />
        </motion.div>

        <motion.div className="panel-reveal" {...revealSection(0.1)}>
          <BlueprintTechnicalSystemSection />
        </motion.div>

        <motion.div
          ref={servicesRef}
          className="snapaboutdiv panel-reveal"
          {...revealSection(0.12)}
        >
          <BlueprintSelectedWorkSection />
        </motion.div>

        <motion.div className="panel-reveal" {...revealSection(0.14)}>
          <BlueprintFooterRow />
        </motion.div>
      </main>
    </div>
  );
}

export default Home;
