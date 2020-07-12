import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import CocktailsContainer from './containers/CocktailsContainer'
import Background from './images/background.jpg'

class App extends React.Component {


  render() {
    return (
 
      <div
      style={{background: {Background }}}>
        <CocktailsContainer />
      </div>
    )
  }
}

export default App
