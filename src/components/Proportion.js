import React from 'react'
// import { Button } from 'semantic-ui-react'

class Proportion extends React.Component {

  renderInput = (proportion, index) => {
    return <div 
    key={index}
    >
      <label>Ingredient Name</label>
      <input
        type="text"
        name="ingredient"
        placeholder="ingredient..."
        value={proportion.ingredient}
        onChange={(e) => this.props.handleInputChange("ingredient", e.target.value, index)}
        value={this.props.ingredient} />

      <label>Quantity</label>
      <input
        type="number"
        name="quantity"
        placeholder="quantity..."
        value={proportion.quantity}
        onChange={(e) => this.props.handleInputChange("quantity", e.target.value, index)}
        value={this.props.quantity} />
    </div>
  }

  render() {
    return <React.Fragment>
      {
        this.props.proportions.map(this.renderInput)
      }
      <button onClick={this.props.handleAddInput}> + </button>
      <button onClick={(event, index) => this.props.handleRemoveInput(event, index)}> - </button>
    </React.Fragment>

  }
}

export default Proportion