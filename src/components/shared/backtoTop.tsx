"use client";
import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const threshold = 300;

    setIsVisible(scrollTop > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 bg-red-600 text-white px-4 py-2 rounded-full outline-none cursor-pointer transition-opacity duration-300 ${
        isVisible ? "block opacity-100" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      Top
    </button>
  );
};

export default BackToTopButton;
