import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./header.css";
 
// import logo from '../assets/logo.svg'
// import darklogo from '../assets/darklogo.svg'
const tabs = [
  { id: "home", path: "#home", label: "Intro"},
  { id: "about", path: "#about", label: "About" },
  { id: "work", path: "#work", label: "Work" },
];

function Header({ activeSection }) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [pillStyles, setPillStyles] = useState({
    left: {},
    right: { width: "334px" },
    active: {}
  });
  const tabsContainerRef = useRef(null);

  useEffect(() => {
    setActiveTab(activeSection);
  }, [activeSection]);

  const updatePillStyles = path => {
    const target = document.querySelector(`a[href="${path}"]`);
    if (target) {
      const rect = target.getBoundingClientRect();
      const leftPillWidth = target.offsetLeft;
      const rightPillWidth =
        tabsContainerRef.current.getBoundingClientRect().width -
        (leftPillWidth + rect.width);

      setPillStyles(prevState => ({
        ...prevState,
        left: {
          width: leftPillWidth,
          left: 0
        },
        right: {
          ...prevState.right,
          width: rightPillWidth,
          left: leftPillWidth + rect.width
        },
        active: {
          width: rect.width,
          left: leftPillWidth,
          borderRadius: "20px"
        }
      }));
    }
  };

  useEffect(() => {
    updatePillStyles(activeTab);
  }, [activeTab]);

  const handleTabClick = (path, event) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    updatePillStyles(path);
    setActiveTab(path);
  };

  return (
    <div className="w-full flex justify-center masterheader my-auto" style={{zIndex: "10000", position: "fixed"}}>
      <div className="pe-20 lg:pe-0">
        {/* <img src={darklogo}  alt="" style={{
          height: "50px",
          zIndex: "1000000",

        }} /> */}
      </div>
      <div
        ref={tabsContainerRef}
        className="flex borderofheader relative"
        style={{ overflow: "hidden" }}
      >
        <motion.div
          initial={false}
          animate={pillStyles.left}
          className={`absolute h-10 rounded-full ${["#home", "#about"].includes(activeTab) ? "about-pill" : "default-pill"}`}
        />
        <motion.div
          initial={false}
          animate={pillStyles.right}
          className={`absolute h-10 rounded-full ${["#home", "#about", "#work"].includes(activeTab) ? "about-pill" : "default-pill"}`}
        />
        <motion.div
          initial={false}
          animate={pillStyles.active}
          className={`absolute h-10 rounded-full ${["#home", "#about", "#work"].includes(activeTab) ? "about-active-pill" : "default-active-pill"}`}
        />

        {tabs.map(tab => (
          <a
            key={tab.id}
            href={tab.path}
            onClick={e => {
              e.preventDefault();
              handleTabClick(tab.path, e);
            }}
            className={`tab-item ${activeTab === tab.path ? "active" : ""} ${["#home", "#about", "#work"].includes(activeTab) ? "special-active" : ""}`}
            style={{
              zIndex: "1000000",
              borderRadius: "35px",
              padding: "0.6rem 0.9rem 0.6rem 1rem"
            }}
          >
            <div className="flex justify-center selectorrr">
              {/* <img src={tab.image} className="imagetabitem pe-3" /> */}
              {tab.label}
            </div>
          </a>
        ))}
      </div>
      <div className=""> </div>
    </div>
  );
}

export default Header;
