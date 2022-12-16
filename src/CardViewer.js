import React from 'react';

class CardViewer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 1
    }
  }

  IncrementItem = () => {
    if (this.state.count < this.props.cards.length) {
      this.setState({ count: this.state.count + 1 });
    }
  }
  
  DecreaseItem = () => {
    if (this.state.count > 1) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  render() {
    const cards = this.props.cards.map((card) => {
        return (
            <div>
                {card.front}
            </div>
        );
      });
    
    return (
      <div>
        <h2>Card Viewer</h2>
        <div>
            <button onClick={this.flip}>{cards[this.state.count-1]}</button>
        </div>
        <div>
            <button onClick={this.DecreaseItem}>Previous</button>
            <button onClick={this.IncrementItem}>Next</button>

        </div>
        <div>
          Card {this.state.count}/{this.props.cards.length}
        </div>

        <hr />
        <button onClick={this.props.switchMode}>Go to card editor</button>
      </div>
    );
  }
}

export default CardViewer;