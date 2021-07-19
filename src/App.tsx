import React from 'react';
import Store from './store'
import {observer} from 'mobx-react'
import './App.css';

const App = observer(() => {
  return (
    <div>
      <h1>{Store.count}</h1>
      <button onClick={() => Store.decrement(Store.count)}>decrement</button>
      <button onClick={() => Store.reset()}>reset</button>
      <button onClick={() => Store.increment(Store.count)}>increment</button>
    </div>
  );
})

export default App;
