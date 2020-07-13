import React from 'react'
// import { Button } from 'semantic-ui-react'

class Proportion extends React.Component {

  renderInput = (proportion, index) => {
    return <div
      key={index}
    >
      <label>Amount</label>
      <input
        type="number"
        name="amount"
        placeholder="amount..."
        value={proportion.amount}
        onChange={(e) => this.props.handleInputChange("amount", e.target.value, index)}
        value={this.props.amount} />

      <label>Ingredient Name</label>
      <input
        type="text"
        name="ingredient"
        placeholder="ingredient..."
        value={proportion.ingredient}
        onChange={(e) => this.props.handleInputChange("ingredient", e.target.value, index)}
        value={this.props.ingredient} />

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