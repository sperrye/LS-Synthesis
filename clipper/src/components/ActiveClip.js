import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setActiveClip } from '../actions';
import { connect } from 'react-redux';

class ActiveClip extends Component {
  componentDidMount() {
    this.props.setActiveClip(this.props.match.params.id);
  }
  render() {
    if (!this.props.activeClip) return (
      <div>item not found</div>
    );
    return (
      <div>
        {this.props.activeClip.name}
        {this.props.activeClip.url}
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeClip: state.activeClip,
  };
};

export default connect(mapStateToProps, { setActiveClip })(ActiveClip);
