import axios from 'axios'

const SERVER = 'http://projectweb-biancafildan.c9users.io:8080'

class BookStore{
  constructor(ee){
    this.content = []
    this.ee = ee
  }
  getAll(){
    axios(SERVER+'/books')
      .then((response) => {
        this.content = response.data
        this.ee.emit('BOOK_LOAD')
      })
      .catch((error) => console.warn(error))
  }
  createOne(book){
    axios.post(SERVER + '/books', book)
      .then(() => this.getAll())
      .catch((error) => console.warn(error))
  }

  deleteOne(id){}
  saveOne(id, book){}
}

export default BookStore