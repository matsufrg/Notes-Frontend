import React, { Component } from 'react';

import Navbar from './Components/Navbar';
import List from './Components/List';
import { Textarea } from './Components/Textarea';
import Main from './Components/Main';
import api from './services/api';
import ListItems from './Components/ListItems';
import MidWrapper from './Components/MidWrapper';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {

      timeout: null,
			value: '',
			saved: false,
      tags: [],
      newTags: '',
      clickedTag: '',
      deletedTags: '',
      tag: 'tags',
      visible: false,
    }
  }

  async componentDidMount(){
    
    const getTags = await api.get('/tags');
    this.setState({ tags: getTags.data });
}
// criar nova tag
  submitBtn = async e => {

    e.preventDefault();

    if (!this.state.newTags.title == ''){

    const submit = await api.post('/tags', {
        title: this.state.newTags.title,
    });

    this.setState({ tags: [...this.state.tags, submit.data] });
  }
}

  handleInputChange = async e => {
    this.setState({ newTags: { title: e.target.value} });
  }

  editValue = value => {
    if (!this.state.clickedTag == ''){
      this.setState({timeout: resetTimeout(this.state.timeout, setTimeout(this.saveValue, 400)), value: value});
    }
	};
	
	saveValue = async e => {
    
    let id = this.state.clickedTag.id;

    await api.put(`/${this.state.tag}/${id}`, {
        text: this.state.value
    });

    const response4 = await api.get(`/${this.state.tag}`);
		
		this.setState({...this.state, saved: true, tags: response4.data})
		
		setTimeout(() => this.setState({...this.state, saved: false}), 1000)
		
  };
  
  handleClickTag = async e => {

  // função para lidar com o clique nas tags
  
  this.setState({ clickedTag: [] });

  let id = e.target.id;

  e.preventDefault();

  const response3 = await api.get(`/${this.state.tag}/${id}`);
  
  if (response3.data.text === undefined) response3.data.text = "";

  this.setState({ 
    clickedTag: {
      title: response3.data.title,
      id: id,
      date: response3.data.createdAt
  },
  value: response3.data.text
});
}

  handleDeleteTag = async e => {

    let id = this.state.clickedTag.id;

    if (!this.state.clickedTag == ''){
      
      this.setState({ clickedTag: '', tags: [], newTags: '', value: '' });

      if (this.state.tag === "tags") {
        e.preventDefault();

        await api.delete(`/tags/${id}`);
        const getTags2 = await api.get(`/tags`);
        this.setState({ tags: getTags2.data });
      } else {

        await api.delete(`/deleted/${id}`);
        const getDeletedTags = await api.get('/deleted');
        this.setState({ tags: getDeletedTags.data });
      }
    }
}

  checkMenuChange = async (e, state) => {
      this.setState({ tag: state, tags: [], clickedTag: '', value: '' , newTags: '' });
      
    if (state === 'deleted') {
      const getDeleted = await api.get('/deleted');
      this.setState({ tags: getDeleted.data });
    } else {
      const tags = await api.get('/tags');
      this.setState({ tags: tags.data });
    }
  }

  handleInfo = () => {
    this.setState({ visible: !this.state.visible });
  }

  render(){
  return (
    <div className="App">
      <Main>
        <Navbar
        handleInfo={this.handleInfo}
        visible={this.state.saved}
        submitBtn={this.submitBtn}
        newTags={this.state.newTags}
        handleInputChange={this.handleInputChange}
        tag={this.state.tag}
        handleDeleteTag={this.handleDeleteTag}
        checkMenuChange={this.checkMenuChange}
        clickedTag={this.state.clickedTag}
        message={this.state.visible}
        />
        <MidWrapper>
          <List>
            <ListItems tags={this.state.tags} handleClick={this.handleClickTag}/>
          </List>
          <div>
            <Textarea clicked={this.state.clickedTag} onChange={ e => this.editValue(e.currentTarget.value)} value={this.state.value}></Textarea>
          </div>
        </MidWrapper>
      </Main>
    </div>
  );
}
}

const resetTimeout = (id, newID) => {
	
	clearTimeout(id)
  return newID
  	
}