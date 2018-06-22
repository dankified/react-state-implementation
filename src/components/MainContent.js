import React from 'react';
import axios from 'axios';

export default class MainContent extends React.Component {
	constructor() {
		super();
		this.state = {
			content: []
		}
	}

	async componentDidMount() {
		let data = await axios.get('https://swapi.co/api/people/1');
		console.log(data);
	}

	render() {
		return <h1>This is Main Content</h1>
	}

}