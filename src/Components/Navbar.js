import styled from 'styled-components';
import React from 'react';

import Items from './Items';

import IconWrapper from './Icons';
import { FaTrashAlt, FaInfoCircle } from 'react-icons/fa';
import Modal from './Modal';
import SaveMessage from './SaveMessage';

export const Navbar = styled.div`

    flex-direction: column;
    display: flex;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(240,240,240,1);
  -moz-box-shadow: 2px 3px 5px 0px rgba(240,240,240,1);
  box-shadow: 2px 3px 5px 0px rgba(240,240,240,1);

li {
  margin-top: 5px;
  width: 100%;
  border-radius: 15px;
  list-style: none;
  padding: 3px 0 0 2px;
  text-align: center;
  border: 2px solid rgb(240,240,240);
}

button {
 display:inline-block;
 padding:0.35em 1.2em;
 border:0.1em solid #FFFFFF;
 margin:0 0.3em 0.3em 0;
background-color: #1AC8FE;
 border-radius:1em;
 cursor: pointer;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Roboto',sans-serif;
 font-weight:300;
 color:#FFFFFF;
 text-align:center;
 transition: all 0.2s;
}

li:hover {
  background-color: rgb(240, 240, 240);
  color: white;
}

ul {
  width: calc(20% - 9px);
  padding: 10px 10px 0px 10px;
  margin: 0;
  display: inline-flex;
  flex-direction: row;
}

div {
    border-bottom: 1px solid aliceblue;
}

input {
  padding: 5px 0px 5px 10px;
  height: 15px;
  width: calc(16% - 8px);
  border-radius: 35px;
  border: 2px solid rgb(240,240,240);
  margin-bottom: 5px;
}

b {
  text-align: center;
  font-size: 24px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(240, 240, 240);
}

span {
  cursor: pointer;
}

@media (max-width: 768px) {
  input {
    width: 90%;
  }
  ul {
    width: 20%;
  }
  button {
    padding: 0.35em 1.0em;
  }
}

@media (max-width: 600px){
  input {
    width: 78%;
  }
}

@media (max-width: 500px) {
  li {
    width: 39% !important;
  }
  ul {
    width: 39%;
  }
  div {
    height: 30px;
  }
}

@media (max-width: 320px) {
  span {
    width: 100%;
  }

  li {
    width: 96% !important
  }
  div {
    height: 85px;
  }
  ul {
    width: 100%;
    flex-direction: column !important; 
  }
`

const NavbarEl = (props) => {
  return(
      <Navbar>
         <b>Note App</b>
          <form onSubmit={props.submitBtn}>
            <input 
            value={props.newTags.title} // props
            type="text"
            onChange={props.handleInputChange}   // props
            placeholder="Create new tag" 
            className="tags"
            />
            <button type="submit">+</button>
          </form>
          <Modal clickedTag={props.clickedTag} visible={props.message} />
      <div>
          <ul>
            <Items onClick={(e) => props.checkMenuChange(e, 'tags')} active={props.tag}>Tag</Items>
            <Items onClick={(e) => props.checkMenuChange(e, 'deleted')} trashAcc={props.tag}>Trash</Items>
          </ul>
          <IconWrapper onClick={props.handleDeleteTag} trash><FaTrashAlt /></IconWrapper>
          <IconWrapper onClick={props.handleInfo} info><FaInfoCircle /></IconWrapper> 
          <SaveMessage visible={props.visible}> Successfully saved! </SaveMessage>
      </div>
    </Navbar>
  );
}

export default NavbarEl;