"use client";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

export default function ScrollIndicator() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY < window.innerHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a href="#About" className="text-[var(--primary)] animate-bounce">
        <BsChevronDown size={32} />
      </a>
    </div>
  );
}
