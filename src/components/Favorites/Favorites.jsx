import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'; 

function Favorites() {
  // Hardcoded favorite recipes
  const favoriteRecipes = [
    {
      id: 1,
      title: 'Lemon Pepper Steak',
      image: 'https://img.spoonacular.com/recipes/649722-312x231.jpg',
    },
    {
      id: 2,
      title: 'Oven Rib-Eye Steaks with Cream Sauce',
      image: 'https://img.spoonacular.com/recipes/1095874-312x231.jpg',
    },
    {
      id: 3,
      title: 'Japanese Steak Salad',
      image: 'https://img.spoonacular.com/recipes/648500-312x231.jpg',
    },
    {
      id: 4,
      title: 'Entrecote Steak with Asparagus',
      image: 'https://img.spoonacular.com/recipes/471242-312x231.jpg',
    },
  ];

  return (
    <div className="favorites">
      <h2>Here are some of our favorite dishes!</h2>
      <div className="recipe-cards">
        {favoriteRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;