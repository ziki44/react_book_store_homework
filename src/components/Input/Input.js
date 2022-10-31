import React from "react";
import styled from "styled-components";

const Input = ({value, name, handleInputChange}) => {
    return (
        <InputStyled value={value} name={name} type="text" onChange={handleInputChange}></InputStyled>
    )
}

const InputStyled = styled.input`
  width: 250px;
  border-radius: 7px;
`


export default Input;