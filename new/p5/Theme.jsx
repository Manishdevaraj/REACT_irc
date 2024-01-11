import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../redux/ThemeAction';

const Theme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme);
    const style = {
        width: '100%',
        height: '100vh',
        backgroundColor: theme,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const btn = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px',
        cursor: 'pointer',
    }
    return (
        <div style={style} data-testid='theme-container'>
            <button style={{ ...btn, width: '120px' }} onClick={() => dispatch(toggleTheme())}>Theme</button>
        </div>
    )
}
export default Theme;

//ThemeAction.js

export const TOGGLE_THEME = 'TOGGLE_THEME'
export const toggleTheme = () => ({
    type: TOGGLE_THEME
})

//ThemeReducer.js

import { TOGGLE_THEME } from "./ThemeAction";

const initialState = {
    theme: 'black'
}
const ThemeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return { ...state, theme: state.theme === 'black' ? 'white' : 'black' }
        default:
            return state;
    }
}
export default ThemeReducer;

//App,js

import React from 'react';
import './assets/css/App.css';
import { Provider } from 'react-redux';
import { Store } from './redux/Store';
import Theme from './components/Theme';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Theme />
      </div>
    </Provider>
  );
}
export default App;
