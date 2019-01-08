import React, { Component } from 'react';
import ProgressBar from 'progressbar.js';
import './Heroku.scss';

class Heroku extends Component {
	componentDidMount() {
		const bar = new ProgressBar.Circle('#contain-heroku-stack', {
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 2600,
      easing: 'bounce',
      strokeWidth: 6,
      from: {color: '#FFEA82', a:0},
      to: {color: '#ED6A5A', a:0.7},

      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }
    });
    bar.animate(0.9); 
	}
	render() {
		return (
		    <div id="contain-heroku-stack" className="contain-heroku-stack">
   				<svg id="heroku-stack" viewBox="0 0 128 128">
            <path fill="#fff" d="M35.3 101.8c-4 0-7.3.5-9.7 1.4-.9 3.2-1.3 6.6-1.3 10.4 0 7 1.2 11.3 9.2 11.3 3.7 0 6.8-1.1 9.3-2.3l-.8-3.6c-2.4.9-5.5 1.7-8.2 1.7-3.5 0-4.6-.9-4.8-6.9h15v-2.2c0-6.1-2.2-9.8-8.7-9.8zm-6.3 9.2c.1-3 .3-3.8.5-4.7 1.9-.4 4.1-.4 5.6-.4 3.3 0 3.9 2.1 3.9 5.1h-10zM13.9 101.8c-2.7 0-4.9.7-7.9 1.5v-10.3h-4v31h4v-16.6c3-1 5-1.5 7-1.5 1 0 2 .5 2 1.7v16.9l.4-.4h4.6v-15.8c0-3.8-1.8-6.5-6.1-6.5zM122 102v17.4c-3 1-5.6 1.5-7.7 1.5-1 0-2.3-.5-2.3-1.7v-17.2h-4v16.7c0 3.7 1.3 6.3 5.6 6.3 2.7 0 7.4-.4 12.4-3.5v-19.5h-4zM103.8 102h-5.4c-1.3 3-3.2 7-5.6 9h-1.8v-18h-5v31h5v-10h2.1c2.8 3 4.6 7 6 10h5.6c-2.1-4-4.5-8.4-7.7-12.4 2.6-2.7 5-5.6 6.8-9.6zM48 124h4v-16.6c2-.8 5-1.1 7-1.2v-4c-3 .2-7 .9-11 3.1v18.7zM71.4 101.8c-6.1 0-10.3 3.2-10.3 11.7 0 8 3.2 11.5 10.3 11.5 6.1 0 10.3-3.2 10.3-11.7 0-8-3.2-11.5-10.3-11.5zm0 19.2c-4 0-5.7-1.4-5.7-7.5 0-5.6 2-7.7 5.7-7.7 4 0 5.7 1.4 5.7 7.5-.1 5.6-2.1 7.7-5.7 7.7zM99 10.3c0-4.6-3.7-8.3-8.3-8.3h-53.4c-4.6 0-8.3 3.7-8.3 8.3v70.4c0 4.6 3.7 8.3 8.3 8.3h53.4c4.6 0 8.3-3.7 8.3-8.3v-70.4zm-67 .5c0-3.3 2.5-5.8 5.7-5.8h52.5c3.3 0 5.8 2.6 5.8 5.8v69.4c0 3.3-2.5 5.9-5.7 5.9h-52.6c-3.3 0-5.7-2.6-5.7-5.9v-69.4zM85.9 14h-10.7s-3.4 8-7.1 12h10.4c5.6-7 7.4-12 7.4-12zM45 76.9l9.8-9.9-9.8-9.8zM73 42.4v34.5l-.1.1h9.1v-34.5c0-18.9-27-8.2-27-8.2v-20.5l-9.8.1s0 32 .1 31.9c29.9-11.6 27.7-3.4 27.7-3.4z"></path>
          </svg>
				</div>
		  )
	}
}
export default Heroku;