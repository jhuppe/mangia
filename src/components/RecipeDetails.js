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
        <div className="recipe-info">
            <h2 className="title">{props.title}</h2>
            <div className="health-labels">{healthLabels}</div>
            <a target="_blank noopener noreferrer" href={props.url}>Get Recipe!</a>
        </div>
    );
}

RecipeDetails.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    healthLabels: PropTypes.array,
    ingredients: PropTypes.array
};

export default RecipeDetails;
