import styled from 'styled-components';

export const Main = styled.div`

    ${props => props.disabled ? `display: none;` : ''};
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-family: "Times New Roman", Times, serif;


    ul {
        padding: 0;
        margin: 0;
    }

    input {
        outline:none;
    }

`;

export default Main;