import React, { Component } from 'react';
import CV from './CV/CV';
import ProjectsList from './projects_list/ProjectsList';
import About from './about/About';
import Stack from './stack/Stack';
class ContentBody extends Component {
	renderContent = () => {
		let active = this.props.activeClass;
		switch(active){
			case 'Projects':
				return <ProjectsList />;
			case 'Stack':
				return <Stack />;
			case 'About':
				return <About />;
			case 'CV':
				return <CV />;
			default:
				return "";
		}
	}

	render() {
		return (
			<div className="content-body">{this.renderContent()}</div>
		);
	}
}

export default ContentBody;
