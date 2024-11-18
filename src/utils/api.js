const BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '8159108fc0144b6395a28b3527a51fcb';

export const fetchRecipes = async (ingredients) => {
    try {
        // fetch the response
        const response = await fetch(`${BASE_URL}?query=${encodeURIComponent(ingredients)}&number=5&apiKey=${API_KEY}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch recipes: ${response.status}`);
        }
        // parse the json response
        const data = await response.json();
        console.log(data);
        // return the recipes from the response data
        return data;
} catch(error) {
    console.error('Error fetching recipes:', error);
    throw error; // pass error back to calling code
}
};

// function to get recipe details (ingredients, instructions, ...) by ID
export const fetchRecipeDetails = async (recipeId) => {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
};