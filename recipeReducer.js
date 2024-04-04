
import {
    FETCH_RECIPES_SUCCESS,
    ADD_RECIPE_SUCCESS,
    UPDATE_RECIPE_SUCCESS,
    DELETE_RECIPE_SUCCESS,
  } from '../actions/recipeActions';
  
  const initialState = [];
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RECIPES_SUCCESS:
        return action.payload;
      case ADD_RECIPE_SUCCESS:
        return [...state, action.payload];
      case UPDATE_RECIPE_SUCCESS:
        return state.map(recipe => recipe._id === action.payload._id ? action.payload : recipe);
      case DELETE_RECIPE_SUCCESS:
        return state.filter(recipe => recipe._id !== action.payload);
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  