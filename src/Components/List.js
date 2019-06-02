import styled from 'styled-components';

export const Createtag = styled.div`

    width: 24% !important;
    display: flex;

    -webkit-box-shadow: -5px 3px 8px 3px rgba(240,240,240,1);
-moz-box-shadow: -5px 3px 8px 3px rgba(240,240,240,1);
box-shadow: -5px 3px 8px 3px rgba(240,240,240,1);

    li {
        width: 100%;
        transition: opacity .4s ease-out
        padding: 13px 0px 10px 30px;
        list-style: none;
        overflow: hidden;
        cursor: pointer;
    }

    ul {
        display: inline-block
        width: 100%;
        height: 605px;
        overflow-x: hidden;
        overflow-y: auto;
        border-radius: 10px;
        border: 1px solid rgb(249, 232, 249);
    }

    li:hover {
        background-color: rgb(240, 240, 240);
    }

    a {
        text-decoration: none;
        color: black;
        width: 300px
    }

    input {
        padding: 5px 5px 5px 30px;
        height: 15px;
        width: 190px;
        border-radius: 35px;
        border: 2px solid rgb(240, 240, 240);
        margin-bottom: 5px;
    }
    

    @media (max-width: 1024px) {
        ul {
            height: 30em;
        }
    }

    @media (max-width: 768px) {
        ul {
            width: 100%;
        }
        li {
            padding: 13px 0px 10px 10px;
        }
    }

    @media (max-width: 500px) {
        width: 50% !important;
    }
    
`;

export default Createtag;