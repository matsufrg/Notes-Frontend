import styled from 'styled-components';

export const Textarea = styled.textarea`
    width: 0%;
    opacity: 0;
    overflow: hidden;
    transition: all .3s ease-in-out;
    height: 45em;
    padding: 10px 10px 0px 10px;
    outline: 0px !important;
    border-radius: 15px;
    resize: none;
    margin-top: 2px;

    -webkit-box-shadow: 5px 1px 8px 3px rgba(240,240,240,1);
-moz-box-shadow: 5px 1px 8px 3px rgba(240,240,240,1);
box-shadow: 5px 1px 8px 3px rgba(240,240,240,1);


    @media (max-width: 1024px) {
        width: 100% !important;
        height: 35em;
    }

    ${props => props.clicked ? 'width: 100% !important; opacity: .9;' : ''};
    
`;

export default Textarea;