import React from 'react'
import styled, { css } from 'styled-components';

const ImageTemplate = styled.img`
    width: 400px;
    height: 400px;
    border-radius: 10%;
    ${props =>
        css`
            transform: translate(-${(props.choice-1)*400}px,0px);
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
