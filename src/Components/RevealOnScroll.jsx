import React, { useEffect, useRef } from 'react';
import "../index.css";

const RevealOnScroll = ({ children, id, onVisible }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          if (onVisible && id) {
            onVisible(id);
          }
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [id, onVisible]);

  return (
    <div
      ref={ref}
      id={id}
      className="reveal-section"
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
