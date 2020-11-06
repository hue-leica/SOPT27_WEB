import React from 'react'
import styled, { css } from 'styled-components';

const ImageTemplate = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 10%;
    ${props =>
        css`
            transform: translate(-${(props.choice-1)*250}px,0px);
            transition: 1s;
        `
    }
`;
function Image({idx, src, choice}) {
    return (
        choice = idx ?
        <ImageTemplate src={src} key={idx} choice={choice}>
        </ImageTemplate>
        : null
    )
}

export default Image
