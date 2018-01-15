import React, { Component } from 'react'
import './App.css'
import BookList from './BookList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to our app</h1>
        </header>
        <BookList />
      </div>
    )
  }
}

export default App
