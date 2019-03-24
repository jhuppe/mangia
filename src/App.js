import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import RecipeWrapper from './components/RecipeWrapper.js';

import './stylesheets/main.scss';

const appId = '652961ce';
const apiKey = '1860a56c4ea74700a6bdd5cfe04a8814';
let url = "https://api.edamam.com/search?";


const api_call = (query) => {
  return url + "q=" + formatQuery(query) + "&app_id=" + appId + "&app_key=" + apiKey
  + "&from=0&to=15";
};

const formatQuery = (query) => {
  let queryArray = query.toLowerCase().split(/\s+/);
  let queryString = "";

  for (let i = 0; i < queryArray.length - 1; i++) {
    queryString += queryArray[i] + "+";
  }

  queryString += queryArray[queryArray.length - 1];

  return queryString;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
      recipesResult: null,
      error: false,
      noResults: false,
      inputFocus: false,
      loading: false
    };

    this.mounted = false;

    this.setFocus = this.setFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  setFocus() {
    this.setState(prevState => ({
      inputFocus: !prevState.inputFocus
    }));
  }

  handleSubmit(query) {
    this.setState({
      loading: true
    });

    fetch(api_call(query))
      .then(res => res.json())
      .then((result) => {
        if (result["count"] === 0) {
          this.setState({
            noResults: true,
            loading: false
          });
        } else {
          this.setState({
            recipesResult: result["hits"],
            loading: false
          });
        }
      }, (error) => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  componentDidMount() {
    this.mounted = true;
    fetch("../assets/suggestions.json")
      .then(res => res.json())
      .then((result) => {
        if (this.mounted) {
          this.setState({
            suggestions: result
          });
        }
      }, (error) => {
        //if error occurs, keep suggestions an empty array
        //autosuggest will not work, it will be a regular text input component
        console.error("Sorry, an error occurred while trying to get suggestion data.");
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }


  render() {
    let recipeWrapper;

    if (this.state.loading)
      recipeWrapper = (<div className="loading">Loading...</div>);
    else if (this.state.error)
      recipeWrapper = (<div className="error">Sorry, something went wrong.</div>);
    else if (this.state.noResults)
      recipeWrapper = (<div className="error">No results found for your search. Please enter another.</div>);
    else if (this.state.recipesResult)
      recipeWrapper = (<RecipeWrapper recipes={this.state.recipesResult} suggestionsOpen={this.state.inputFocus} />);

    return (
      <div className="app">
        <div className="header">
          <h1>MANGIA</h1>
          <p>Search for delicious recipes!</p>
        </div>
        <SearchBox
          onSubmit={this.handleSubmit}
          setFocus={this.setFocus}
          suggestions={this.state.suggestions} />
        {recipeWrapper}
      </div>
    );
  }
}

export default App;
