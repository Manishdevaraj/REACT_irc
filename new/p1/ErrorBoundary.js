import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError === true) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}
ErrorBoundary.propTypes = {
    children: PropTypes.node.isRequired
}
export default ErrorBoundary;

//Hero.jsx

import React from 'react';
import PropTypes from 'prop-types';
const Hero = ({ heroName }) => {
    if (heroName === 'Joker') {
        throw new Error('Not a hero');
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
Hero.propTypes = {
    heroName: PropTypes.string.isRequired
}
export default Hero;

//App.js

import React from 'react';
import './assets/css/App.css';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName='Batman' />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </div>
  );
}
export default App;
