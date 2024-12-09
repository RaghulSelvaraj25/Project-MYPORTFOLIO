import React from "react";
import "../stylecss/Project.css"

function Project() {
  const projectList = [
    { name: "Temperature Converter",
    
      description:
        "A temperature converter is a tool that helps convert temperatures between different scales, such as Celsius (°C) and Fahrenheit (°F). These conversions are useful in various contexts like science, weather reporting, cooking, or traveling to countries that use different temperature scales.Formulas for Conversion:Celsius to FahrenheitMultiply the Celsius temperature by 9, divide by 5, and then add 32.Fahrenheit to Celsius.Subtract 32 from the Fahrenheit temperature, then multiply by 5 and divide by 9.",
    
      link: "https://github.com/RaghulSelvaraj25/project-react-temperature-converter.git",
    },
    { name: "Online-Shopping-App",
    
        description:"Creating a online shopping project with a responsive design involves designing a webpage where users can view a list of products and have an option to 'BuyNow' directly. The layout needs to be responsive to ensure it works well on both mobile and desktop devices. Below is a basic structure for your project:Features of the Online Shopping Project:Responsive Design:The webpage adjusts to various screen sizes (desktop, tablet, and mobile).Products List:Display a collection of products with an image, title, description, and price.Each product will have a 'BuyNow' button.Buy Now Button:When clicked, this button can lead to a checkout page or trigger an alert for simplicity in the basic version.",
      
        link: "https://github.com/RaghulSelvaraj25/Project-React-Online-shopping-App.git",
      },
  ];
  return (
    <section id="project" className="project">
      <h2>Projects</h2>
      <div className="project-list">
      {projectList.map((project,index)=>(
        <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
      </div>
    </section>
  );
}

export default Project;
