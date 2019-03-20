import React from "react";
import PropTypes from "prop-types";

import '../styles/RecipeDetails.css';

const RecipeDetails = props => {
    let healthLabels = null;

    if (props.healthLabels) {
        healthLabels = props.healthLabels.map((label, i) => {
            return (<span key={i} className="health-label">{label}</span>);
        });
    }
    return (
        <div className="recipe-details">
            <h2 className="title">{props.title}</h2>
            <div className="health-labels">{healthLabels}</div>
            <div className="ingredients">{props.ingredients}</div>
            <a target="_blank noopener noreferrer" href={props.url}>Get Recipe!</a>
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
