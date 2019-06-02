import styled from 'styled-components';

export const Tags = styled.ul`

li {
  margin-top: 5px;
  width: 150px;
  list-style: none;
  padding: 3px 0 0 2px;
  text-align: center;
  border: 2px solid rgb(240,240,240);
}

li:hover {
  background-color: rgb(240, 240, 240);
  color: white;
}

ul {
  padding: 10px 10px 0px 10px;
  margin: 0;
  display: flex;
  flex-direction: row;
}

`;

export default Tags;