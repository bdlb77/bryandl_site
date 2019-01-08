import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Project.scss';


const Project = (props)  => {
  return(
    <Card id="project-item">
      <CardActionArea >
      <a href={props.url} target="_blank" className="link">
          <img
          className='media-card'
          height="140"
          src={props.image}/>
      </a>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Project;