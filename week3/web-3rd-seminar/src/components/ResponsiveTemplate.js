import React from 'react'
import styled from 'styled-components';

const Template = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function ResponsiveTemplate({children}) {
    return (
        <Template>
            {children}
        </Template>
    )
}

export default ResponsiveTemplate
