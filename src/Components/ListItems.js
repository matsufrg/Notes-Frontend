import React, { Component } from 'react';

import Items from './Items';

export default class ListItems extends Component {
    render() {
    return(
        <ul>
            {this.props.tags && [...this.props.tags].map((tags) => (
            <Items onClick={this.props.handleClick} pin={tags.pin} id={tags._id}>{tags.title}</Items>
            ))}
        </ul> 
    )
}
}