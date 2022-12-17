import React from 'react';
import './CardEditor.css';

import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="/viewer">Go to card viewer</Link>
        <br/>
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default Homepage;