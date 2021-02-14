import React, { Component } from 'react';
import axios from 'axios';

export default class createMeme extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeCaption = this.onChangeCaption.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      caption: '',
      url:''
    }
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeCaption(e) {
    this.setState({
      caption: e.target.value
    })
  }

  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const meme = {
      name: this.state.name,
      caption: this.state.caption,
      url: this.state.url
    }

    console.log(meme);

    axios.post('https://devanshi-xmeme.herokuapp.com/memes',meme)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3><b>Create New Meme</b></h3>
      <br/>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Meme Owner :</label>
          <input type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName} 
              />
        </div>
        <div className="form-group"> 
          <label>Caption :</label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.caption}
              onChange={this.onChangeCaption}
              />
        </div>
        <div className="form-group">
          <label>Meme URL :</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.url}
              onChange={this.onChangeUrl}
              />
        </div>
       

        <div className="form-group">
          <input type="submit" value="Submit Meme" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}