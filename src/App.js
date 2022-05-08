import React, { Component } from 'react';
import calcTotalTime from './RaceTimeAverage';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      raceEndTimes: []
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ raceEndTimes: e.target.value})
  }
  handleSubmit = e => {
    e.preventDefault();
    calcTotalTime(this.state.raceEndTimes)
  }


  render() {
    const results = this.state.raceEndTimes.length > 0 ? <p>{this.state.raceEndTimes}</p> : null
    return (
      <div className="App">
        <header className="App-header">
          <object data="logo.svg" width="43" height="42" aria-labelledby='logo'></object>
        </header>
        <main className='racing-form'>
          <label classname='race-time-box'>Race Time</label>
          <form>
            <input
              className='input-box'
              type='text'
              placeholder='Enter race end times'
              value={this.state.raceEndTimes}
              onChange={e => this.handleChange(e)}
            />
            <button onClick={e => this.handleSubmit(e)}>Submit</button>
            <hr />
            <label className='results'>Results</label>
            {results}
          </form>
        </main>
      </div>
    );
  }
}

export default App;
