import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import '../styles/RecipeWrapper.css';

const RecipeWrapper = props => {
    let recipe;

    recipe = props.recipes.map((item, i) => {
        return (
            <Recipe
                key={i}
                title={item.recipe.label}
                image={item.recipe.image}
                url={item.recipe.url}
            />
        );

    });

    return (
        <div className="recipe-wrapper" style={props.suggestionsOpen ? { marginTop: 155 } : null}>
            {recipe}
        </div>
    );
};

RecipeWrapper.propTypes = {
  recipes: PropTypes.array.isRequired,
  suggestionsOpen: PropTypes.bool.isRequired
};

export default RecipeWrapper;