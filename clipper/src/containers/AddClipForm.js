import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
//import { Link } from 'react-router-dom';

class AddClipForm extends Component {
  render() {
    return (
      <div>
      AddClipForm
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label>Name your clip:</label>
            <Field name='name' component='input' type='text'/>
          </div>
          <div>
            <label>Clip URL:</label>
            <Field name='url' component='input' type='text'/>
          </div>
          <div>
            <label>Description</label>
            <Field name='description' component='input' type='text'/>
          </div>
          <button type='submit'>Add Clip</button>
        </form>
      </div>
    );
  }
}

AddClipForm = reduxForm({
  form: 'add-clip',
})(AddClipForm);

export default AddClipForm;
