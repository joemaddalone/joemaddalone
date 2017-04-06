import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Work from './Work'
import Skills from './Skills'
import data from './resume-data';
import './resume.css';


const Intro = () => <p>I am an accomplished web developer able to work in various environments and adapt to new
	processes quickly. I have extensive experience coordinating large projects with multiple teams, handholding through
	decision making with small startups, and managing to make my own ‘weekend projects’ profitable. I've taught
	thousands of developers the skills they need to advance their careers. I'm a father of five, I've founded companies,
	invented services, led teams, and guided products. However, I have not yet had the pleasure of working with you.</p>


const ResumeNav = ( { slides, next, currentSlide } ) => (
  <nav className="resume-nav">
	  {slides.map( ( s, i ) => <a key={i} className={currentSlide === i ? 'active' : ''} href="javascript:void(0)"
		onClick={next.bind( null, i )}>{s.label}</a> )}
  </nav>
)


class Resume extends React.Component {
	constructor ( { match, history } ) {
		super();
		this.history = history;
		this.slides = [
			{ label: "Intro", component: Intro },
			{ label: "Work", component: Work },
			{ label: "Skills", component: Skills }
		]
		this.state = {
			currentSlide: 0
		}
	}
	
	componentWillMount () {
		//document.body.style.overflow = 'scroll'
	}
	
	setSlide ( currentSlide ) {
		if ( currentSlide !== this.state.currentSlide ) {
			this.setState( { currentSlide } );
		}
	}
	
	nextSlide ( e ) {
		if ( this.state.currentSlide === this.slides.length - 1 ) {
			this.setState( { currentSlide: 0 } );
		}
		else {
			this.setState( { currentSlide: this.state.currentSlide + 1 } );
		}
	}
	
	render () {
		const back = ( e ) => {
			stop( e )
			if ( e.target.className === 'overlay' ) {
				document.querySelector( '.overlay' ).style.opacity = 0;
				setTimeout( () => this.history.push( '/' ), 250 )
			}
		};
		const stop = ( e ) => e.stopPropagation();
		
		return (
		  <div className="resume">
			  <div className="overlay" onClick={back}>
				  <ResumeNav slides={this.slides} currentSlide={this.state.currentSlide}
					next={this.setSlide.bind( this )}/>
				  <ReactCSSTransitionGroup transitionName="modal-slide" transitionEnterTimeout={0}
					transitionLeaveTimeout={0}>
					  <div key={Math.random()} className="modal modal-slide" onClick={stop}>
						  
						  {React.createElement(this.slides[ this.state.currentSlide ].component)}
					  </div>
				  </ReactCSSTransitionGroup>
			  </div>
		  </div>)
	}
	
	componentDidMount () {
		setTimeout( () => document.querySelector( '.overlay' ).style.opacity = 1, 250 )
	}
	
	componentWillUnmount () {
		//document.body.style.overflow = ''
	}
}


export default Resume
