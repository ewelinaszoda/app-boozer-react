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

  //????????????????//
  handleSubmit = (event, cocktail) => {
    event.preventDefault()
  }


  // not working 
  handleRemoveInput = (index) => {
    this.setState({ proportions: this.state.proportions.filter((proportion) => { return proportion !== proportion[index] }) })
  }

  handleAddInput = () => {
    const newProportion = { ingredient: "", quantity: 0 }
    this.setState({ proportions: [...this.state.proportions, newProportion] })
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
          <form onSubmit={(e)=> this.handleSubmit()}
      >
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
          ingredient={this.state.proportions.ingredient}
          quantity={this.state.proportions.quantity}
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