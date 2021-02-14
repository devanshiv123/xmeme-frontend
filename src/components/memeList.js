import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Meme = props => (
    <div> 
        <br />
        <h5><b>{props.meme.name}</b></h5>
        <h5><em>&nbsp;&nbsp;&nbsp;&nbsp;{props.meme.caption}</em></h5>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={props.meme.url} alt="" width="500" height="500"></img>
    </div>
)

export default class memeList extends Component {
  constructor(props) {
    super(props);

    this.state = {memes: []};
  }

  componentDidMount() {
    axios.get('https://devanshi-xmeme.herokuapp.com/memes')
      .then(response => {
        this.setState({ memes: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  MemeList() {
    return this.state.memes.map(currentmeme => {
      return <Meme meme={currentmeme} key={currentmeme._id} />;
    })
  }

  render() {
    return (
      <div>
        <h1><b>Meme Stream</b></h1>
        { this.MemeList() }
      </div>
    )
  }
}