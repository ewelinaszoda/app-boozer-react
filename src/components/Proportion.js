import React from 'react'

class Proportion extends React.Component {

  renderInput = (proportion, index) => {
    return <React.Fragment>
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
        onChange={e => this.props.handleInputChange("quantity", e.target.value, index)}
        value={this.props.quantity} />
    </React.Fragment>
  }

  render() {
    return <React.Fragment>
      {
        this.props.proportions.map(this.renderInput)
      }
      <button onClick={this.props.addInput}> + </button>
      <button onClick={() => this.props.removeInput()}> - </button>
    </React.Fragment>

  }
}

export default Proportion