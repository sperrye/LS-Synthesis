import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
      Home Page
        <ul>
          <li>
            <Link to='/clips'>Click for Clips</Link>
          </li>
          <li>
            <Link to='/add-clip'>Add New Clip</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;
