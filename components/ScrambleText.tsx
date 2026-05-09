"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export function useScrambleText(text: string, trigger: boolean, duration = 1500) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHÝJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  
  useEffect(() => {
    if (!trigger) return;
    
    let iteration = 0;
    const totalIterations = Math.ceil(duration / 30);
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration * (text.length / totalIterations)) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      
      iteration++;
      
      if (iteration >= totalIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    
    return () => clearInterval(interval);
  }, [trigger, text, duration]);
  
  return displayText;
}

export function ScrambleText({ text, className, as: Component = "span" }: { 
  text: string; 
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const displayText = useScrambleText(text, isInView);
  
  return (
    <Component ref={ref} className={className}>
      {displayText}
    </Component>
  );
}
