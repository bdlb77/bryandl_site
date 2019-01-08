import React from 'react';
import './About.scss';
import Typography from '@material-ui/core/Typography';

const About = (props) => {
  return (
  	<div className="about-wrapper">
      <div className= "about-img">
      </div>
      <div className="about-right">
        <Typography variant="h6" className="paragraph-right">Howdy, I'm Bryan!</Typography>
        <Typography variant="p" className="paragraph-bottom-right"> 
          Welcome to my site! I'm a Full Stack developer hailin' from Texas.
          I studied International Relations at the University of Texas at Austin before deciding to take a small career shift into Tech. 
          I chose to jump into programming by joining the Le Wagon batch #150, in Tel Aviv.  
          Since July 2018, I have been working as a Teaching Assistant for Le Wagon, as well as expanding my knowledge on programming.
          
        </Typography>
      </div>
    </div>
  )
}

export default About;