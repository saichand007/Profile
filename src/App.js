import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import LangReducer from './component/reducer';
import { Provider } from 'react-redux'
import BasicInfo from './component/basicpage';

const store=createStore(LangReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <div className="App">
       <BasicInfo/>
      </div>
      </Provider>
    );
  }
}

export default App;
