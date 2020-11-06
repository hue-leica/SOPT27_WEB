import React from 'react'
import InputContainer from '../containers/InputContainer';
import ResultContainer from '../containers/ResultContainer';
import ResponsiveTemplate from '../components/ResponsiveTemplate';

function MainPage() {
    return (
        <ResponsiveTemplate>
            <InputContainer></InputContainer>
            <ResultContainer></ResultContainer>
        </ResponsiveTemplate>
    )
}

export default MainPage
