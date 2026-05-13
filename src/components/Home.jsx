import React, {useEffect} from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import { useInView } from 'react-intersection-observer';
import SectionOneHero from "./SectionOneHero";
import SectionTwoShowcase from "./SectionTwoShowcase";
import "./index.css"
function Home({setActiveSection}) {
  const [homeRef, homeInView] = useInView ({threshold: 0.2});
  const [showcaseRef, showcaseInView] = useInView ({threshold: 0.2});
  const [aboutRef, aboutInView] = useInView ({threshold: 0.1});
  const [servicesRef, servicesInView] = useInView ({threshold: 0.1});

  useEffect(() => {
    if (homeInView) setActiveSection('#home');
    else if (showcaseInView) setActiveSection('#about');
    else if (aboutInView) setActiveSection('#about');
    else if (servicesInView) setActiveSection('#work');
  }, [homeInView, showcaseInView, aboutInView, servicesInView, setActiveSection]);
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
                <div ref={showcaseRef} className="snapaboutdiv">
                  <SectionTwoShowcase>
                    <div ref={aboutRef} className="snapaboutdiv" id="about">
                      <About />
                    </div>
                    <div ref={servicesRef} className="snapaboutdiv" id="work">
                      <Portfolio />
                    </div>
                    <div id="footer">
                      <Footer />
                    </div>
                  </SectionTwoShowcase>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
