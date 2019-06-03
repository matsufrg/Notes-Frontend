import styled from 'styled-components';

export const IconWrapper = styled.span`

    font-size: 20px;
    color: #1ac6ff !important;
    width: 20px !important;
    height: 20px !important;
    position: relative;
    top: 3px;
    left: 5px;
    padding-left: 15px;

    ${props => props.info ? 
    `
    color: #1ac6ff !important;
    padding-left: 15px;
    text-align: left;` 
    : ''
    } 
    
    @media (max-width: 500px){
        ${props => props.trash ? `
        left: 0;
        padding-left: 0;` : ''};

        ${props => props.info ? `
        padding-left: 0;
            ` 
            : '' }
    }

    @media (max-width: 320px) {
    ${props => props.trash ? `
        left: 5px;
        top: 3px !important;
        float: right !important;
        padding-right: 10px;
        padding-left: 15px;
    ` 
    : '' }

    ${props => props.info ? `
        left: 10px;
        top: 3px !important;
        right: 5px !important;
        float: right !important;
    ` 
    : '' }
    }
`;


export default IconWrapper;