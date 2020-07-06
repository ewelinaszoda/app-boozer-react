import React from 'react'
// import Cocktail from '../components/Cocktail'

class CocktailsCollection extends React.Component {


  renderCocktail = () => {
    return (
      <ul>
        {this.props.cocktails.map(cocktail =>
          <li
            key={cocktail.id}
            cocktail={cocktail}
            onClick={() => this.props.handleClick(cocktail.id)}
          >
            {cocktail.name}
          </li>
        )
        }
      </ul>
    )
  }


  render() {

    return (
      this.renderCocktail()
    )
  }
}

export default CocktailsCollection