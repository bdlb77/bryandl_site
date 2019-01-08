import React, { Component } from 'react';
import Project from './project/Project';
import './ProjectsList.scss';
import projectsData from '../../../../data_set/projects_data'
class ProjectsList extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		projects: []
  	}
  }

  componentDidMount() {
    // console.log(projectsData);
    this.setState({projects: projectsData});
  }
  render(){
	  return (

	    <div className= "project-list">
	    {this.state.projects.map( project => {
        console.log(project.title)
	    	return <Project
	    						key={project.id}
	    						title={project.title}
	    						description={project.description}
	    						image={project.image}
	    						url={project.url}/>
	    })}
	    </div>
	  )
  }
}

export default ProjectsList;
