import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  // Create refs for each section you want to scroll to
  const experienceRef = useRef(null);
  const technologyRef = useRef(null);
  const projectsRef = useRef(null);

  // A generic function to scroll to any given ref
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Provide the refs and the scroll function to consuming components
  const contextValue = {
    experienceRef,
    technologyRef,
    projectsRef,
    scrollToSection,
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};