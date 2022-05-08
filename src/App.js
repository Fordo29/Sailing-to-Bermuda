import React from 'react';
import './App.scss';

function App() {




  return (
    <div className="App">
      <header className="App-header">
        <object data="logo.svg" width="43" height="42" aria-labelledby='logo'></object>
      </header>
      <main className='racing-form'>
        <label classname='race-time-box'>Race Time</label>
        <div>
          <input></input>
          <button>Submit</button>
        </div>
        <hr />
        <label className='results'>Results</label>
      </main>
    </div>
  );
}

export default App;
