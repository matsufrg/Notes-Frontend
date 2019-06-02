import styled from 'styled-components';

export const Items = styled.li`

        text-decoration: none;
        color: black;
        width: 100% !important;
        cursor: pointer
        overflow: hidden;
        transition: all .3s ease-in-out;

    ${props => props.active === 'tags' ? 'background-color: rgb(240, 240, 240);' : ''};    
    ${props => props.trashAcc === 'deleted' ? 'background-color: rgb(240, 240, 240);' : ''};

`;

export const ItemsMenu = styled.div`
    
    width: 20%;
`

export default Items;