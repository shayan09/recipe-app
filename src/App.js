import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "e1b10291e85cea2cbd9154b9344b694a";

class App extends Component {
  state = {
      recipes: []
  }
  getRecipe = async(e) => {
      const recipeName = e.target.elements.recipeName.value;
      e.preventDefault();
      const API_CALL = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);

      const data = await API_CALL.json();
      this.setState({recipes: data.recipes});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
