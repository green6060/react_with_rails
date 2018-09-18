import React from 'react';

class TodoForm extends React.Component {
  state = { name: '' }

  // A function that fires off EVERY time a change is detected, updating state each time. 
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  // A function that first off upon submit, preventing default refreshing of the page, 
  // running "this.props.addItem", with a parameter of this.state.name (form value)
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: '' })
  }

  // Renders a form
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Add A Todo"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default TodoForm;