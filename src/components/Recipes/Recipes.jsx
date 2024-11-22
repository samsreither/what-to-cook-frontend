import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchRecipes, fetchRecipeDetails } from "../../utils/api";
import RecipeCard from "../RecipeCard/RecipeCard";
import RecipeModal from "../RecipeModal/RecipeModal";
import Preloader from "../Preloader/Preloader";
import "./Recipes.css";

function Recipes() {
  // state variables
  const [recipes, setRecipes] = useState([]); // holds fetched recipes
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  const [selectedRecipe, setSelectedRecipe] = useState(null); // stores clicked recipe details
  const [modalOpen, setModalOpen] = useState(false);

  // accessing the URL
  const location = useLocation(); // access the current URL
  const queryParams = new URLSearchParams(location.search); // parse query parameters
  const ingredients = queryParams.get("ingredients"); // get ingredients parameter

  // fetch recipes with useEffect
  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes(ingredients); //api function
        console.log("recipes data", data);
        setRecipes(data.results || []); //store recipes in state
      } catch (err) {
        setError("Failed to fetch recipes. Try again later.");
      } finally {
        setLoading(false); // stop the loading
      }
    };
    if (ingredients) getRecipes(); // fetch recipes only if ingredients are provided
  }, [ingredients]);

  // if loading, show the preloader
  if (loading) return <Preloader />;

  if (error) return <p>{error}</p>;

  if (recipes.length === 0) return <p>Nothing found. Try different ingredients!</p>;

  // function to handle click on a recipe
  const handleRecipeClick = async (id) => {
    try {
      const data = await fetchRecipeDetails(id); // fetch details of clicked recipe
      console.log("Recipe details:", data);
      setSelectedRecipe(data); // store recipe details in state
      setModalOpen(true); // open modal
    } catch (err) {
      setError("Failed to fetch recipe details. Try again later.");
    }
  };

  return (
    <div className="recipes">
      <h2 className="recipes__title">Dishes to Cook</h2>
      <div className="recipe-cards">
        {console.log(recipes)}
        {recipes.slice(0, 6).map((recipe) => (
          <RecipeCard
            key={recipe.id} // Use recipe id as the key prop
            title={recipe.title}
            image={recipe.image}
            id={recipe.id}
            onClick={() => handleRecipeClick(recipe.id)} // handle click to open modal
          />
        ))}
      </div>

      {/* Render Recipe Modal if it's open */}
      {modalOpen && selectedRecipe && (
        <RecipeModal
          title={selectedRecipe.title}
          ingredients={selectedRecipe.extendedIngredients}
          instructions={selectedRecipe.instructions}
          onClose={() => setModalOpen(false)} // Close the modal
        />
      )}
    </div>
  );
}

export default Recipes;
