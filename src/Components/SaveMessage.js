import styled from 'styled-components';

export const SaveMessage = styled.p`
        margin: 0 0 0 40px;
        opacity: 0;
        padding-right: 40px;
        overflow: hidden;
        transition: all .3s ease-in-out;
        border-radius: 3px;
        float: right;
        color: red;
        font-size: 24px;

        @media (max-width: 600px) {
            font-size: 20px;
            padding-right: 10px;
        }

    ${props => props.visible ? `opacity: .7; display:block;` : ''};
`;

export default SaveMessage;