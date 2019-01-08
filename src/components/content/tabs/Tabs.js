import React  from 'react';
import './Tabs.scss';
import Tab from './tab/Tab';

const Tabs = (props) => {
	return (
		<div className="tabs-wrapper">
			{props.tabs.map(tab => {
					return <Tab setActive={props.setActive} name={tab} active={props.active} key={tab} /> 
			})}
		</div>
	);
};
export default Tabs;