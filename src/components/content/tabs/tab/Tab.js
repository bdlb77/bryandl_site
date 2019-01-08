import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Tab extends Component {

		handleClick = () => {
		if(this.props.setActive){
			const name = this.props.name;
			this.props.setActive(name)
		}
	}

	render() {
		const classes = 'info-tab '+ (this.props.name === this.props.active ? "active-tab" : "" );
		const contained = this.props.active === this.props.name ? "outlined" : "";
		return (
			<Button color="default" onClick={this.handleClick} className={classes} >
					{this.props.name}
			</Button>
		);
	}
}
export default Tab;
