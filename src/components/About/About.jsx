import React from "react";
import "./About.css"; // Optional: If you want to add custom styling

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h2 className="about__title">About the Recipe Finder</h2>
        <p className="about__description">
          Welcome to Recipe Finder! This app helps you discover new dishes to cook based on the ingredients you have on hand.
          Simply enter the ingredients you have, and we will show you some delicious recipes you can make!
        </p>
        <p className="about__footer">
          Enjoy cooking and discovering new meals!
        </p>
      </div>
    </div>
  );
}

export default About;