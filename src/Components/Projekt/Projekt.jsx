import React, { useState } from "react";
import "./Projekt.css";

const Projekt = () => {
  const projects = [
    {
      title: "Car Management System",
      description: "A React frontend with Node.js backend and MySQL database for managing car inventory. Allows adding and retrieving cars like Volvo, Mercedes-Benz, and BMW from the database.",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio to showcase my skills and projects, built with responsive design and modern web development techniques.",
    },
    {
      title: "E-commerce Application",
      description: "An online store with shopping cart and payment integration. Built with a scalable architecture and focused on providing a seamless shopping experience.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getSlideClass = (index) => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex + 1) % projects.length) return "next";
    if (index === (currentIndex - 1 + projects.length) % projects.length)
      return "prev";
    return "hidden";
  };

  return (
    <div  id="projekt" className="project-slider">
      <button className="slider-btn prev-btn" onClick={handlePrev}>
        &#8249;
      </button>

      <div className="slider-content">
        {projects.map((project, index) => (
          <div className={`slide ${getSlideClass(index)}`} key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <button className="slider-btn next-btn" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

export default Projekt;
