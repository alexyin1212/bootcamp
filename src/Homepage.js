import React from 'react';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './CardEditor.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    render() {
        // const decks = Object.keys(props.homepage).map(deckId => {
        //     return (
        //         <div key={deckId}>
        //             <Link to={`/viewer/${deckId}`}>{props.homepage[deckId].name}</Link>
        //         </div>
        //     )
        // })

        return (
            <div>
                <h1>Homepage</h1>
                <Link to="/editor">Go to card editor</Link>
                <h3>Flashcards</h3>
                <Link to="viewer/deck2">Stats</Link>
                {/* {decks} */}
            </div>
        );
    }
}

    // const mapStateToProps = state => {
    //     return {homepage: state.firebase.data.homepage};

    <div>I had some trouble on this part</div>


export default compose(firebaseConnect(['/homepage']), connect(),)(Homepage);
