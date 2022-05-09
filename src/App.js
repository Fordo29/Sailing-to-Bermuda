import React, { Component } from 'react';
import calcTotalTime from './RaceTimeAverage';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      raceEndTimes: '',
      results: 0,
      error: ''
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({ raceEndTimes: e.target.value})
  }
  
  handleSubmit = e => {
    e.preventDefault();

    let regex = new RegExp(/(0?[1-9]|1[0-2]):([0-5]\d)\s((?:A|P)\.?M\.?),\s\Day\s\d{1,2}/gi)
    const stringSplit = this.state.raceEndTimes.split(/, (?=\d{2})/)
    stringSplit.forEach(endTime => {
      if (regex.test(endTime) === false) {
        this.clearResults();
        this.setState({ error: 'You have entered your race times incorrectly.  Please try again.'})
      } else {
        this.clearError();
        this.setState({ results: calcTotalTime(this.state.raceEndTimes)})
      }
    })

    this.clearInput();
  }
  
  clearInput = () => {
    this.setState({ raceEndTimes: '' })
  }

  clearError = () => {
    this.setState({ error: '' })
  }

  clearResults = () => {
    this.setState({ results: 0 })
  }

  render() {
    const displayEndTimes = this.state.results ? <p className='display-results'>The average race time was {this.state.results} minutes</p> : null
    const displayError = this.state.error ? <p>You have entered your race times incorrectly.  Please try again.</p> : null
    return (
      <div className="App">
        <header className="App-header">
          <object data="logo.svg" width="35" height="40" aria-labelledby='logo'></object>
        </header>
        <main className='racing-form'>
          <label className='race-time-box'>Race Time</label>
          <form className='form'>
            <div>
              <input
                className='input-box'
                type='text'
                value={this.state.raceEndTimes}
                onChange={e => this.handleChange(e)}
              />
              <button onClick={e => this.handleSubmit(e)}>Submit</button>
            </div>
            {displayError}
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
