import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from './RecipeDetails';
import '../stylesheets/Recipe.scss';

const Recipe = props => {
    return (
        <li className="recipe">
            <img src={props.image} alt="Recipe" />
            <RecipeDetails
                title={props.title}
                url={props.url}
                ingredients = {props.ingredients}
            />
        </li>
    );
};

Recipe.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
    ingredients: PropTypes.array
};

export default Recipe;