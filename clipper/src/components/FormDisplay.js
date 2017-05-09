import React, { Component } from 'react';
import AddClipForm from '../containers/AddClipForm';
import { addClip } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App.css';

class FormDisplay extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(formObject) {
    this.props.addClip(formObject).then((action) => {
      this.props.history.push(`/clips/${action.payload.data.id}`);
    });
  }
  render() {
    return (
      console.log('made it to form display'),
      <div className="red">
      FormDisplay
        <AddClipForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

FormDisplay = withRouter(FormDisplay);
export default connect(null, { addClip })(FormDisplay);
