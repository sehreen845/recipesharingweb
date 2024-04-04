// client/src/App.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, addRecipe, updateRecipe, deleteRecipe } from './actions/recipeActions';
import './style.css'; // Import CSS file

function App() {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  const [newRecipe, setNewRecipe] = useState({ title: '', ingredients: '', instructions: '' });

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const handleAddRecipe = () => {
    if (newRecipe.title && newRecipe.ingredients && newRecipe.instructions) {
      dispatch(addRecipe(newRecipe));
      setNewRecipe({ title: '', ingredients: '', instructions: '' });
    }
  };

  const handleUpdateRecipe = (recipeId, updatedRecipe) => {
    dispatch(updateRecipe(recipeId, updatedRecipe));
  };

  const handleDeleteRecipe = (recipeId) => {
    dispatch(deleteRecipe(recipeId));
  };

  return (
    <div className="container">
      <h1>Recipe Sharing App</h1>
      <div className="add-recipe">
        <h2>Add New Recipe</h2>
        <input
          type="text"
          placeholder="Title"
          value={newRecipe.title}
          onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingredients"
          value={newRecipe.ingredients}
          onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
        />
        <input
          type="text"
          placeholder="Instructions"
          value={newRecipe.instructions}
          onChange={(e) => setNewRecipe({ ...newRecipe, instructions: e.target.value })}
        />
        <button onClick={handleAddRecipe}>Add Recipe</button>
      </div>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe._id}>
            <h2>{recipe.title}</h2>
            <p>Ingredients: {recipe.ingredients}</p>
            <p>Instructions: {recipe.instructions}</p>
            <div className="actions">
              <button onClick={() => handleUpdateRecipe(recipe._id, { title: 'Updated Title' })}>Update</button>
              <button onClick={() => handleDeleteRecipe(recipe._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
