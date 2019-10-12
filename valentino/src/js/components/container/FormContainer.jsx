// A skeleton for wrapping child components
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      seo_title: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <form id="article-form">
        <input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;

export default FormContainer;
