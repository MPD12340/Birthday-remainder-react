import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const[People , setPeople] = useState(data);
  const clearAll = (e)=>{
e.preventDefault();
setPeople([])
  }
  console.log(People)
  return (
    <main>
      <section className="container">
        <h1> {People.length} birthdays today</h1>
        <List  people ={People}/>
        <button onClick={clearAll}>click</button>
      </section>
    </main>
  );
}

export default App;
