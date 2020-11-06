import React from 'react'
import styled from 'styled-components';

const InputText = styled.input`
  background-color: #24272b;
  border-radius: 10px;
  border: none;
  color: #b6b7b8;
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 320px;

  &:focus{
    outline: none;
  }
  &::placeholder{
    color: #b6b7b8;
  }
`;

function SearchInput({onHandleInputChange, onHandleFormSubmit}) {

    return (
        <>
            <form onSubmit={onHandleFormSubmit}>
                <InputText
                 onChange={onHandleInputChange}
                 type="input"
                 placeholder="Github 프로필을 검색해보세요"/>                
            </form>
        </>
    )
}

export default SearchInput
