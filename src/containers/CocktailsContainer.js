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

addCocktail = (data) => {
    // ??????????????
    // e.preventDefault()}

    // const newCocktail = {
    //   name: data.name,
    //   description: data.description,
    //   proportions: {
    //     ingredient: data.ingredient,
    //     quantity: data.quantity,
    //   }
    // }
  
    // fetch(`http://localhost:3000/cocktails`), {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // Accept: "application/json",
    //   },
    //   body: JSON.stringify(newCocktail)
    // }
    //   .then(resp => resp.json())
    //   .then(cocktail => {
    //     this.setState({ cocktails: [...this.state.cocktails, cocktail] })
    //   })
    //   .catch(error => error.message)
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
            addCocktail={this.addCocktail}
          />
        </div>
      </div>
    )
  }
}

export default CocktailsContainer