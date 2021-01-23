//implemeting redux form

import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';

class StreamForm extends Component {
  renderInput = ({ input, label, meta }) => {
    return (
      <div
        className={`field ${
          meta.error && meta.touched ? 'error' : ''
        }`}
      >
        <label>{label}</label>
        <input type="text" {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = values => {
    this.props.onSubmit(values);
  };
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="ui button primary">
          Submit
        </button>
      </form>
    );
  }
}
const validate = ({ title, description }) => {
  const errors = {};
  if (!title) {
    errors.title = 'You must enter a title';
  }
  if (!description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};
const formWrapper = reduxForm({
  form: 'streamForm',
  validate,
})(StreamForm);

export default formWrapper;
