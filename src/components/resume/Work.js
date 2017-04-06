import data from './resume-data';
import React from 'react';
import moment from 'moment'
import './timeline.css'


const dateFormat = 'MMMM YYYY';

const orderByDate = ( arr ) => {
	return arr.slice().sort( function ( a, b ) {
		return new moment( a.startDate ) > new moment( b.startDate ) ? -1 : 1;
	} );
};


class Work extends React.Component {
	constructor () {
		super();
		this.state = { currentJob: 0 }
		this.jobs = orderByDate( data.work )
	}
	
	setCurrentJob ( currentJob ) {
		this.setState( { currentJob } )
	}
	
	render () {
		return (
		  <div style={{ width: '100%' }}>
			  <Job job={this.jobs[ this.state.currentJob ]}/>
			  <Timeline jobs={this.jobs} currentJobIndex={this.state.currentJob} markerClick={this.setCurrentJob.bind( this )}/>
		  </div>
		
		)
	}
}
;

const Job = ( { job } ) => {
	let endDate = job.endDate ? new moment( job.endDate ).format( dateFormat ) : 'present';
	return (<div className="job">
		  <h2>{job.company}</h2>
		  <p>{new moment( job.startDate ).format( dateFormat )} - {endDate}</p>
		  <p>{job.position}</p>
		  <p>{job.summary}</p>
	  </div>
	)
};

const Timeline = ( { jobs, markerClick, currentJobIndex } ) => {
	return (
	  <div className="timeline">
		  {jobs.map( ( job, i ) => <TimelineMarker active={i===currentJobIndex} markerClick={markerClick.bind( null, i )} key={i} odd={i % 2 === 0}
			job={job}/> )}
	  </div>
	
	)
};


const TimelineMarker = ( { job, odd, markerClick, active } ) => (
  <div onClick={markerClick}
	className={`timeline-marker ${odd ? 'odd' : 'even'} ${active ? 'active': ''}` }
	data-date={`${job.position}, ${new moment( job.startDate ).format( 'YYYY' )}`}></div>
);


export default Work;
