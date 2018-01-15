import React, { Component } from 'react'
import BookStore from './BookStore'
import {EventEmitter} from 'fbemitter'
import Book from './Book'
import BookForm from './BookForm'

let ee = new EventEmitter()
let store = new BookStore(ee)

function addBook(book){
  store.createOne(book)
}

class BookList extends Component {
  constructor(props){
    super(props)
    this.state = {
      books : []
    }
  }
  componentDidMount(){
    store.getAll()
    ee.addListener('BOOK_LOAD', () => {
      this.setState({
        books : store.content
      })
    })
  }
  render() {
    return (
      <div>
        <div>
          <BookForm onAdd={addBook}/>
        
          {
            this.state.books.map((a) => 
              <Book book={a} key={a.id} />
            )
          }
        </div>
      
      </div>
    )
  }
}

export default BookList
