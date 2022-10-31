import React from "react";
import styled from "styled-components";

const ViewBooks = ({books, handleDeleteBook}) => {
    return (
        <Ul>
        {books.map((book) => (
          <Li key={book.id} onClick={() => handleDeleteBook(book.id)}>
            <h4>{`Tytuł: ${book.title}`}</h4>
            <h5>{`Kategoria: ${book.category}`}</h5>
            <Img src={book.picture} alt={book.alt}></Img>
            <h6>{book.author}</h6>
          </Li>
        )) ?? null}
      </Ul>
    )
}

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const Li = styled.li`
  cursor: pointer;
  list-style: none;
  margin-left: 50px;
`

const Img = styled.img`
  width: 100px;
  height: 150px;
`

export default ViewBooks;