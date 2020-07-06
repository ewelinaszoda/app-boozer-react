import React from 'react'
import CocktailsCollection from './CocktailsCollection'
// import Cocktail from './components/Cocktail'
import CocktailDetails from '../components/CocktailDetails'
import Form from '../components/Form'

import API from '../API'

class CocktailsContainer extends React.Component {

  state = {
    cocktails: [],
    cocktailId: null,
  }


  handleClick = (id) => {
    this.setState({
      cocktailId: id,
    })
  }


  componentDidMount() {
    API.getAllCocktails()
      .then(data => this.setState({ cocktails: data }))
      .catch(error => console.log(error.message))
  }


  render() {

    return (
      <div class="ui three column doubling stackable grid container">
        <div class="column">
          <CocktailsCollection
            cocktails={this.state.cocktails}
            handleClick={this.handleClick}
          />
        </div>

        <div class="column">
          {
            this.state.cocktailId && <CocktailDetails cocktailId={this.state.cocktailId} />
          }
        </div>

        <div class="column">
          <Form
            cocktails={this.state.cocktails}
          />
        </div>
      </div>
    )
  }
}

export default CocktailsContainer