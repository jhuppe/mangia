import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './styles/App.css';


const appId = "652961ce";
const appKey = '1860a56c4ea74700a6bdd5cfe04a8814';

class App extends Component {

  state = {
    recipes: null,
    loading: false,
    value: ''
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios (
      `https://api.edamam.com/search?q=${val}&app_id=${appId}&app_key=${appKey}&from=0&to=20`
    );
    const recipes = await res.data.results;
    console.log(val);

    this.setState({ recipes, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState ({ value: e.target.value });
  };

  render() {
    return (
     <div className="app">
     </div>
    );
  }
}

export default App;
