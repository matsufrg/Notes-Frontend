import styled from 'styled-components';

export const IconWrapper = styled.span`

    font-size: 20px;
    color: #1ac6ff !important;
    width: 20px !important;
    height: 20px !important;
    position: relative;
    top: 3px;
    left: 5px;
}

    ${props => props.info ? 
    `
    color: #1ac6ff !important;
    padding-left: 15px;
    text-align: left;` 
    : ''
    } 

    @media (width: 320px) {
    ${props => props.trash ? `
        top: 3px;
        float: right;
    ` 
    : '' }
    padding-right: 10px;
    }

    @media (width: 320px) {
    ${props => props.info ? `
        top: 3px;
        right: 11px;
        float: right;
    ` 
    : '' }
    padding-right: 10px;
    }
`;


export default IconWrapper;