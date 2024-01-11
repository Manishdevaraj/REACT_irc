import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <p>Hello, World!</p>
            </div>
        );
    }
}
export default HelloWorld;

//App.js

import React from 'react';
import './assets/css/App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld />
    </div>
  );
}
export default App;