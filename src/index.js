import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDYgyXHG7AlrC1EYzM2PozXkWCoJ48jiA8';
// Create a new component. This component should produce some HTML.
const App = function() {
    return <div>Bunty Baweja!</div>;
} 

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
