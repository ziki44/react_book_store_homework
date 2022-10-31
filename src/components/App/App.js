import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AddBook from "../AddBook/AddBook";
import ViewBooks from "../ViewBooks.js/ViewBooks";
import { postBook, getBook, deleteBook } from '../../helpers/http'
import { url } from '../../helpers/config'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [picture, setPicture] = useState("");
  const [alt, setAlt] = useState("");
  const [author, setAuthor] = useState("");

  const refreshBookList = () => {
    getBook(url)
    .then((books) => setBooks(books))
    .catch((e) => console.log(e.message))
  }

  useEffect(() => {
    refreshBookList()
  }, [])

  

  const clearInputs = () => {
    setTitle("");
    setCategory("");
    setPicture("");
    setAlt("");
    setAuthor("");
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newBook = {
        id: uuidv4(),
        title: title,
        category: category,
        picture: picture,
        alt: alt,
        author: author
    }
    postBook(url, newBook)
    .then(() => refreshBookList())
    .catch((e) => console.log(e.message))
    
    clearInputs();
  }

  const handleDeleteBook = (id) => {
    deleteBook(url, id)
    .then(() => refreshBookList())
    .catch((e) => console.log(e.message))
    refreshBookList();
  }

  const handleInputChange = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "picture":
        setPicture(e.target.value);
        break;
      case "alt":
        setAlt(e.target.value);
        break;
      case "author":
        setAuthor(e.target.value);
        break;
      default:
        console.log("Niepoprawna wartość!")
        break;
    }
  }

  return (
    <Wrapper>
      <AddBook handleSubmit={handleSubmit} handleInputChange={handleInputChange} title={title} category={category} picture={picture} alt={alt} author={author} />
      <ViewBooks books={books} handleDeleteBook={handleDeleteBook} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
`

export default App;
