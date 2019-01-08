import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import './ContentTitle.scss'
 class ContentTitle extends Component {
	render() {
		return (
			<div>
				<Typography variant="h2" color="textPrimary">
          Full Stack Developer 
        </Typography>
				<Typography variant="h5" color="textSecondary">
          Based in Berlin
        </Typography>
			</div>
		);
	}
}

export default ContentTitle;