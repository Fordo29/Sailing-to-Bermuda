import React, { Component } from 'react';
import calcTotalTime from './RaceTimeAverage';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      raceEndTimes: '',
      results: 0
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ raceEndTimes: e.target.value})
  }
  
  handleSubmit = e => {
    e.preventDefault();
    // if(this.state.raceEndTimes !==)
    this.setState({ results: calcTotalTime(this.state.raceEndTimes)})
    this.clearInput();
  }
  
  clearInput = () => {
    this.setState({ raceEndTimes: '' })
  }

  render() {
    const displayEndTimes = this.state.results ? <p className='display-results'>The average race time was {this.state.results} minutes</p> : null
    return (
      <div className="App">
        <header className="App-header">
          <object data="logo.svg" width="43" height="42" aria-labelledby='logo'></object>
        </header>
        <main className='racing-form'>
          <label className='race-time-box'>Race Time</label>
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
            {displayEndTimes}
          </form>
        </main>
      </div>
    );
  }
}

export default App;
