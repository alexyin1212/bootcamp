import React from 'react';
import './CardViewer.css';

import { Link } from 'react-router-dom';

class CardViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      displayFront: true,
    };
  }

  nextCard = () => {
    if (this.state.currentIndex < this.props.cards.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        displayFront: true,
      });
    }
  };

  prevCard = () => {
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        displayFront: true,
      });
    }
  };

  flipCard = () => this.setState({ displayFront: !this.state.displayFront });

  render() {
    // this uses the ternary operator:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
    const card = this.props.cards[this.state.currentIndex][
      this.state.displayFront ? 'front' : 'back'
    ];

    return (
      <div>
        <h2>Card Viewer</h2>
        <div class="card" onClick={this.flipCard}>
          {card}
        </div>
        <div>
        Card {this.state.currentIndex + 1} / {this.props.cards.length}
        </div>
        
        <br/>
        <button onClick={this.prevCard}>Prev card</button>
        <button onClick={this.nextCard}>Next card</button>
        <hr/>
        <Link to="/editor">Go to card editor</Link>
      </div>
    );
  }
}

export default CardViewer;