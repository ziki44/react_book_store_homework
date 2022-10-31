import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const AddBook = ({handleSubmit, handleInputChange, title, category, picture, alt, author}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <label>Tytuł:</label>
                        </td>
                        <td>
                            <Input value={title} name="title" handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Kategoria:</label>
                        </td>
                        <td>
                            <Input value={category} name="category" handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Zdjęcie:</label>
                        </td>
                        <td>
                            <Input value={picture} name="picture" handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Opis:</label>
                        </td>
                        <td>
                            <Input value={alt} name="alt" handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Autor:</label>
                        </td>
                        <td>
                            <Input value={author} name="author" handleInputChange={handleInputChange}></Input>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button>Dodaj</Button>
    </Form>
    )
}

const Form = styled.form`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  height: 150px;
  width: 300px;
`

const Button = styled.button`
  position: absolute;
  left: 245px;
  border-radius: 5px;
  width: 90px;
  &:hover {
    cursor: pointer;
    background-color: #9b9c9e;
    color: white;
    transition: background-color .5s, color .5s;
  }
`

export default AddBook;