import React from 'react';

import styled from 'styled-components';
import { distanceInWords } from 'date-fns';


export const Modal = styled.div`
        opacity: 0;
    display: none;
    position: absolute;
    top: 4px;
    left: 250px;
    width: 250px;
    background-color: rgb(240,240,240);
    border-radius: 17px;
    height: 75px;
    z-index: 9999;
    transition: opacity .4s ease-out;


    -webkit-box-shadow: 8px 8px 5px 0px rgba(230,230,230,1);
    -moz-box-shadow: 8px 8px 5px 0px rgba(230,230,230,1);
    box-shadow: 8px 8px 5px 0px rgba(230,230,230,1);

    @media (max-width: 1000px) {
        left: 150px;
    }
    @media (max-width: 320px) {
        left: 0px;
        top: 50px;
    }
    p {
        margin: 0;
        padding: 8px 0 10px 50px;
    }

    ${props => props.visible ? `opacity: 1 !important; display: block;` : ''}
`;

const ModalBody = props => {
    return(
        <Modal visible={props.visible}>
         <p>Created at: {distanceInWords(props.clickedTag.date, new Date())}</p>
         <p>Title: {props.clickedTag.title}</p>
        </Modal>
    )
}

export default ModalBody;