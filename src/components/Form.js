import React from 'react'
import Proportion from './Proportion'

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

  handleSubmit = (event, cocktail) => {
    event.preventDefault()
    // const currentArrayCocktails = [...this.props.cocktails]
    // this.setState({ [this.props.cocktails]: [...currentArrayCocktails, cocktail] })
  }

  handleRemoveInput = () => {
    this.setState({ proportions: this.state.proportions.filter((proportion) => { return proportion !== proportion }) })
  }

  handleAddInput = () => {
    const newProportion = { ingredient: "", quantity: 0 }
    this.setState({ proportions: [...this.state.proportions, newProportion] })
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {

    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <h2>Create a Cocktail</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="cocktail's name..."
          onChange={this.handleInputChange}
          value={this.state.name}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="description..."
          onChange={this.handleInputChange}
          value={this.state.description}
        />
        <label>Instruction</label>
        <input
          type="text"
          name="instruction"
          placeholder="instruction..."
          onChange={this.handleInputChange}
          value={this.state.instruction}
        />
        <hr />
        <label>Proportion</label>
        <br />
        <Proportion
          proportions={this.state.proportions}
          handleInputChange={this.handleInputChange}
          ingredient={this.state.ingredient}
          quantity={this.state.quantity}
          addInput={this.handleAddInput}
          removeInput={this.handleRemoveInput}
        />
        <hr />
        <button type="submit">Create Cocktail</button>
      </form >
    )
  }
}

export default Form