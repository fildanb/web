import React, { Component } from 'react'

class Book extends Component {
  render() {
    return (
      <div>
        {this.props.book.title} {this.props.book.author} {this.props.book.publisher} {this.props.book.year}
      </div>
    )
  }
}

export default Book
