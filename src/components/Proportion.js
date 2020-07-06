import React from 'react'

class Proportion extends React.Component {

  renderInput = () => {
    return <React.Fragment>
      <label>Ingredient Name</label>
      <input
        type="text"
        name="ingredient"
        placeholder="ingredient..."
        onChange={this.props.handleInputChange}
        value={this.props.ingredient} />

      <label>Quantity</label>
      <input
        type="text"
        name="quantity"
        placeholder="quantity..."
        onChange={this.props.handleInputChange}
        value={this.props.quantity} />
    </React.Fragment>
  }

  render() {
    return <React.Fragment>
      {
        this.props.proportions.map(this.renderInput)
      }
      <button onClick={this.props.addInput}> + </button>
      <button onClick={this.props.removeInput}> - </button>
    </React.Fragment>

  }
}

export default Proportion