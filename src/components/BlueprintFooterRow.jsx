import React from "react";
import { motion } from "framer-motion";
import { useBlueprintMotion } from "./blueprintMotion";

function BlueprintFooterRow() {
  const { revealItem, staggerDelay } = useBlueprintMotion();
  const year = new Date().getFullYear();
  const footerItems = [
    { type: "link", content: "Drin Krasniqi / CV", href: "#about" },
    { type: "text", content: "42.66N / 21.16E / Remote-ready systems" },
    { type: "text", content: `Hello World @${year}` },
  ];

  return (
    <footer id="footer" className="blueprint-footer-row">
      {footerItems.map((item, index) =>
        item.type === "link" ? (
          <motion.a
            key={item.content}
            href={item.href}
            {...revealItem(staggerDelay(index))}
          >
            {item.content}
          </motion.a>
        ) : (
          <motion.p key={item.content} {...revealItem(staggerDelay(index))}>
            {item.content}
          </motion.p>
        )
      )}
    </footer>
  );
}

export default BlueprintFooterRow;
