import React from 'react'
import Proportion from './Proportion'
import { Button } from 'semantic-ui-react'


class Form extends React.Component {

  state = {
    name: "",
    description: "",
    instruction: "",
    proportions: [{
      ingredient: "",
      quantity: 0,
    }],
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newCocktail = this.state
    
    fetch(`http://localhost:3000/api/v1/cocktails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newCocktail)
    })
      .then(resp => resp.json())
      .then(cocktail => this.props.addCocktail(cocktail))
      .catch(error => error.message)
  }

  // not working 
  handleRemoveInput = (event) => {
    event.preventDefault()
    // console.log(index)
    this.setState({ proportions: this.state.proportions.slice(0, this.state.proportions.length - 1) })
  }

  // handleRemoveInput = (event) => {
  //   event.preventDefault()
  //   this.setState({ proportions: this.state.proportions.filter(proportion => proportion !== proportion[proportion.length - 1] ) })
  // }

  handleAddInput = (event) => {
    event.preventDefault()
    const newProportion = { ingredient: "", quantity: 0 }
    this.setState({ proportions: [...this.state.proportions, newProportion] })
  }

  handleInputChangeMain = ({target: { name, value }}) => {
    this.setState({
      [name]: value,
    })
  }

  handleInputChange = (key, newValue, index) => {
    const updatedArray = [...this.state.proportions]
    // the key is ingredients or quantity 
    updatedArray[index][key] = newValue

    this.setState({
      proportions: updatedArray,
    })
  }


  render() {
    return (
      // <form onSubmit={()=> this.addCocktail(this.state)}
      // >
      <form onSubmit={(event) => this.handleSubmit(event)}>

        <h2>Create a Cocktail</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="cocktail's name..."
          onChange={this.handleInputChangeMain}
          value={this.state.name}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="description..."
          onChange={this.handleInputChangeMain}
          value={this.state.description}
        />
        <label>Instruction</label>
        <input
          type="text"
          name="instruction"
          placeholder="instruction..."
          onChange={this.handleInputChangeMain}
          value={this.state.instruction}
        />
        <hr />
        <label>Proportion</label>
        <br />
        <Proportion
          proportions={this.state.proportions}
          handleInputChange={this.handleInputChange}
          ingredient={this.state.proportions.ingredient}
          quantity={this.state.proportions.quantity}
          handleAddInput={this.handleAddInput}
          handleRemoveInput={this.handleRemoveInput}
        />
        <hr />
        <Button type="submit">Create Cocktail</Button>
      </form >
    )
  }
}


export default Form