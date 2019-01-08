import React, { Component } from 'react';
import './Content.scss';

import ContentTitle from './content_title/ContentTitle';
import ContentBody from './content_body/ContentBody';
import Tabs from './tabs/Tabs';

import { Container, Row, Col } from 'reactstrap';

class Content extends Component {
	constructor(props){
		super(props);
		this.state = {
			tabs: [ 'Projects', 'About', 'Stack', 'CV' ],
			activeClass: ''
		}
	}

	handleActiveClass = (active) => {
		this.setState({activeClass: active});
	}
	render() {
		return (
				<Container className="content-container">
				<Row className="content-title-wrapper">
					<ContentTitle />
				</Row>
				<Row className="info-wrapper">
					<Tabs setActive={this.handleActiveClass} tabs={this.state.tabs} active={this.state.activeClass} />
				</Row>
				<Row className= "content-body-wrapper">
					<ContentBody tabs={this.state.tabs} activeClass={this.state.activeClass}/>
				</Row>
					
				</Container>
		);
	}
}

export default Content;