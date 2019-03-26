import React from "react";
import PropTypes from "prop-types";
import Ingredients from "./Ingredients"

import '../stylesheets/RecipeDetails.scss';

const RecipeDetails = props => {

  let modal = props.ingredients ? <Ingredients ingredients={props.ingredients} /> : null;
    return (
      <div className="recipe-details">
        <h2 className="title">{props.title}</h2>
        <a target="_blank noopener noreferrer" href={props.url}>View Recipe</a>
        {modal}
      </div>
    );
}

RecipeDetails.defaultProps = {
    healthLabels: null,
    ingredients: null
};

RecipeDetails.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    ingredients: PropTypes.array
};

export default RecipeDetails;
