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
		let data = await axios.get('https://goodparts.dokku-hosted.thruhere.net/people');
		console.log(data);
	}

	render() {
		return <h1>This is Main Content</h1>
	}

}