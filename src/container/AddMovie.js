import React from "react";
import { connect } from "react-redux";
import { addMovie } from "../actions";

class AddMovie extends React.Component {
  state = {
    id: "",
    title: "",
    description: ""
  };

  handleOnChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    const { dispatch } = this.props;
    const { id, title, description } = this.state;
    const movie = {
      id,
      title,
      description
    };
    dispatch(addMovie(movie));
    event.preventDefault();
  };

  render() {
    const { id, title, description } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="id"
          value={id}
          onChange={this.handleOnChange}
          type="text"
          placeholder="id"
        />
        <input
          name="title"
          value={title}
          onChange={this.handleOnChange}
          type="text"
          placeholder="title"
        />
        <input
          name="description"
          value={description}
          onChange={this.handleOnChange}
          type="text"
          placeholder="description"
        />
        <button type="submit">send</button>
      </form>
    );
  }
}

export default connect()(AddMovie);
