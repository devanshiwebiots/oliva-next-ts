"use client";
import React, { useState } from "react";
import SVG from "@/CommonComponent/SVG/Svg";

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = (name: boolean) => {
    if (name) {
      document.body.classList.remove("dark-only");
      document.body.classList.add("light");
      setDarkMode(!darkMode);
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark-only");
      setDarkMode(!darkMode);
    }
  };

  return (
    <li>
      <div className={`mode ${darkMode ? "active" : ""}`} onClick={() => darkModeHandler(darkMode)}>
        <SVG iconId='moon' />
      </div>
    </li>
  );
};
