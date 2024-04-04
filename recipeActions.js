
import axios from 'axios';

export const fetchRecipes = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/recipes');
    dispatch({ type: 'FETCH_RECIPES_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error fetching recipes: ', error);
  }
};

export const addRecipe = (recipeData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/recipes', recipeData);
    dispatch({ type: 'ADD_RECIPE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
};

export const updateRecipe = (recipeId, recipeData) => async (dispatch) => {
  try {
    const response = await axios.patch(`/api/recipes/${recipeId}`, recipeData);
    dispatch({ type: 'UPDATE_RECIPE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error('Error updating recipe: ', error);
  }
};

export const deleteRecipe = (recipeId) => async (dispatch) => {
  try {
    await axios.delete(`/api/recipes/${recipeId}`);
    dispatch({ type: 'DELETE_RECIPE_SUCCESS', payload: recipeId });
  } catch (error) {
    console.error('Error deleting recipe: ', error);
  }
};
