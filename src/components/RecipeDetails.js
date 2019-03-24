import React from "react";
import PropTypes from "prop-types";
import Ingredients from "./Ingredients"

import '../stylesheets/RecipeDetails.scss';

const RecipeDetails = props => {
    let healthLabels = null;

    if (props.healthLabels) {
        healthLabels = props.healthLabels.map((label, i) => {
            return (<span key={i} className="health-label">{label}</span>);
        });
    }
  let modal = props.ingredients ? <Ingredients ingredients={props.ingredients} /> : null;
    return (
      <div className="recipe-details">
        <h2 className="title">{props.title}</h2>
        <div className="health-labels">{healthLabels}</div>
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
    healthLabels: PropTypes.array,
    ingredients: PropTypes.array
};

export default RecipeDetails;
