import React from 'react'; // core react library
import ReactDOM from 'react-dom'; // ReactDOMlibrary

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBwvx8ZhnC_adQRFheyMHJ50iVvqI9kJdw';

//  Create a new component. This component should produce
//  some HTML
const App = () => { //const is an ES6 piece of syntax //const is somewhat doing the same thing in declaring a variable as a var. Like Var a, b, c or so on.
  return (
    <div>
      <SearchBar />
    </div> // JSX
  );
}

//  Take this component's generated HTML and put it
//  on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')); //updated render statement //DOM used here as we're trying to render something to the DOM (DOM (Document Object Model))
// we passed a reference to that container

//sample line added
