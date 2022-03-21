import {createContext, useState} from 'react'
import axios from 'axios'
const BookContextData = createContext()


const BookContextFun = ({children})=>{

  const [books,setBooks] = useState([])

  const getBooks = () =>{
    function fetchData(url) { 
        axios.get(url).then(res=>{setBooks(res.data)})
        }
        fetchData('http://localhost:8080/books')    
  }

  return(
  <>
  <BookContextData.Provider value={{books,getBooks}}>
  {children}
  </BookContextData.Provider>
  </>
  )
}

export {BookContextFun, BookContextData}