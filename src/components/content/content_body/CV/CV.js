import React from 'react';
import './CV.scss';
const CV = (props) => {
  return (
    <div className="cv-wrapper">
    	 <embed className="cv" src={ require('./image_cv/resume.pdf') } width={600} height={700} />
		</div>
  )
}

export default CV;