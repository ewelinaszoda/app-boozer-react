import React from 'react'
import API from '../API'

class CocktailDetails extends React.Component {

  state = {
    id: 0,
    name: "",
    description: "",
    instructions: "",
    proportions: [],
  }

  getData = (data) => this.setState({
    id: data.id,
    name: data.name,
    description: data.description,
    instructions: data.instructions,
    proportions: data.proportions,
  })

  componentDidMount() {
    API.getCocktailDetails(this.props.cocktailId)
      .then(data => this.getData(data))
  }

  componentDidUpdate(prevProps) {
    if( prevProps.cocktailId !== this.props.cocktailId) {
      API.getCocktailDetails(prevProps.cocktailId)
      .then(data => this.getData(data))
    }
  
  }

  renderDetails = () => {
    return <React.Fragment>
      <h2>{this.state.name}</h2>
      <p>{this.state.description}</p>
      <p>{this.state.instructions}</p>
      <ul>{this.state.proportions.map(proportion =>
        <li>
          <stronger>{proportion.amount}</stronger> {proportion.ingredient_name}
        </li>
      )}
      </ul>
    </React.Fragment>

  }


  render() {
    return (
      <React.Fragment>
        {this.renderDetails()}
      </React.Fragment>
    )
  }
}

export default CocktailDetails