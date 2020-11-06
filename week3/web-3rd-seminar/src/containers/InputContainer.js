import React, {useRef} from 'react';
import InputComponent from '../components/InputComponent';
import {useDispatch, useSelector} from "react-redux";
import {changeInput} from '../modules/input';
import {getUser, getRepo} from '../modules/user';

function InputContainer() {
    const dispatch = useDispatch();
    //const nameInput = useRef();

    const {username} = useSelector(({input})=>({
        username: input.username,
    }));

    const onHandleInputChange = (e)=>{
        const value = e.target.value;
        dispatch(changeInput(value));
    };
    const onHandleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(getUser(username));
        dispatch(getRepo(username));
    }

    return (
        <>
            <InputComponent
            onHandleInputChange={onHandleInputChange}
            onHandleFormSubmit={onHandleFormSubmit}
            username={username}
            >
            </InputComponent>
        </>
    )
}

export default InputContainer
