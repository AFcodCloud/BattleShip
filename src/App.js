import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import Field from './Components/Field';
import store from './ReduxStore/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Field/>
    </div>
    </Provider>
  );
}

export default App;
