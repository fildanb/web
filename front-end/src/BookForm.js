import React, { Component } from 'react'

class BookForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      bookTitle : '',
      bookAuthor : '',
      bookPublisher:'',
      bookYear:''
    }
    this.handleChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
  }
  render() {
    return (
      <form>
          Title : <input type="text" name="bookTitle" onChange={this.handleChange}/>
          Author : <input type="text" name="bookAuthor" onChange={this.handleChange}/>
          Publisher : <input type="text" name="bookPublisher" onChange={this.handleChange}/>
          Year : <input type="number" name="bookYear" onChange={this.handleChange}/>
          <input type="button" value="add" onClick={() => this.props.onAdd({title : this.state.bookTitle, author : this.state.bookAuthor,publisher:this.state.bookPublisher,year:this.state.bookYear})}/>
      </form>
    )
  }
}

export default BookForm
