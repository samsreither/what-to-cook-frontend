import React from "react";
import PropTypes from "prop-types";
import './RecipeCard.css'; 

function RecipeCard({ title, image, id, onClick }) {
  return (
    <div className="recipe-card" key={id} onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="recipe-card__image"
      />
      <h3 className="recipe-card__title">{title}</h3>
    </div>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeCard;