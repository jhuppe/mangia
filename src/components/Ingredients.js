import React, { Component } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

import "../stylesheets/Ingredients.scss";

class Ingredients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            error: false
        };
        this.mounted = false;
        this.toggleModal = this.toggleModal.bind(this);
    }

    getIngredients() {
        let ingredientList;

        let noError;

        ingredientList = this.props.ingredients.map((item, a) => {

            noError = (
                <div>
                    <label>
                        {item}
                    </label>
                </div>
            );

            return (
                <li key={a} className="ingredient">
                    {this.state.error ? item : noError}
                </li>
            );
        });

        return ingredientList;
    }

    toggleModal() {
        this.setState(prevState => ({
            modalOpen: !prevState.modalOpen,
        }));
    }

    componentDidMount() {

        this.mounted = true;

        this.props.ingredients.map(item => {
            return { value: item };
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        let modal = null;
        let ingredientList = this.getIngredients();
        let modalOpenError = this.state.error && this.state.modalOpen;

        // ingredientList = this.getIngredients();

        if (modalOpenError) {
            modal = (
                <Modal onClose={this.toggleModal}>
                    <h1>Ingredients</h1>
                    <ul className="ingredients-list-error">{ingredientList}</ul>
                </Modal>
            );
        } else if (this.state.modalOpen) {
            modal = (
                <Modal onClose={this.toggleModal}>
                    <h1>Ingredients</h1>
                    <ul className="ingredients-list">{ingredientList}</ul>
                </Modal>
            );
        }

        return (
            <div className="ingredients">
                <button className="ingredients-button" onClick={this.toggleModal}>
                    Ingredients
                </button>
                {modal}
            </div>
        );
    }
}

Ingredients.defaultProps = {
    ingredients: []
};

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
};

export default Ingredients;
