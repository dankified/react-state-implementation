import React from "react";
import axios from "axios";
import Characters from './Characters';

export default class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      content: []
    };
  }

  async componentDidMount() {
    let content = [];
    let data = await axios.get("https://swapi.co/api/people/1");
    content.push(data.data);
    data = await axios.get("https://swapi.co/api/people/3");
    content.push(data.data);
    this.setState({ content });
  }

  render() {
	return (<Characters data={this.state.content}/>);
  }
}
