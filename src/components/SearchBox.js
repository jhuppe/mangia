import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchAssist from './SearchAssist';

import '../styles/SearchBox.css';

const shuffleArray = (a) => {
    let temp;
    let random;

    for (let i = a.length - 1; i > 0; i--) {
        random = Math.floor(Math.random() * (i + 1));
        temp = a[i];
        a[i] = a[random];
        a[random] = temp;
    }

};

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setFocus = this.setFocus.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
        
    }

    handleSubmit(e) {
        e.preventDefault();

        let query = this.state.value.trim();

        this.setState({
            value: query
        });

        if (query.length)
            this.props.onSubmit(query.toLowerCase());

    }

    handleValueChange(value) {
        this.setState({
            value: typeof value !== "undefined" ? value.replace(/[^a-zA-Z\s]/g, "") : ""
        });
    }

    setFocus() {
        this.props.setFocus();
    }

    render() {

        shuffleArray(this.props.suggestions);

        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit}>
                    <SearchAssist
                        value={this.state.value}
                        onChange={this.handleValueChange}
                        setFocus={this.setFocus}
                        placeholder="What do you want to eat?"
                        suggestions={this.props.suggestions}
                    />
                </form>
            </div>
        );
    }

}

SearchBox.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    setFocus: PropTypes.func.isRequired,
}

export default SearchBox;
