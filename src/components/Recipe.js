import React from 'react';
import PropTypes from 'prop-types';
import RecipeDetails from './RecipeDetails';
import '../styles/Recipe.css';

const Recipe = props => {

    return (
        <li className="recipe">
            <img src={props.image} alt="Recipe" />
            <RecipeDetails
                title={props.title}
                url={props.url}
            />
        </li>
    );
};

Recipe.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
};

export default Recipe;