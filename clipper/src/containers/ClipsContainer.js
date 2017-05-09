import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClips } from '../actions';
import { Link } from 'react-router-dom';

class ClipsContainer extends Component {
  componentDidMount() {
    //if (!this.props.items.length) return;
    this.props.getClips();
  }
  render () {
    return (
      <div>
        <ul>
          {this.props.clips.map((clip, i) => {
            return (
              <li key={i}>
                <Link to={`/clips/${clip.id}`}>
                  {clip.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    clips: state.clips,
  };
};

export default connect(mapStateToProps, { getClips })(ClipsContainer);
