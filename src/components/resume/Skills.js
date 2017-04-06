import data from './resume-data';
import React from 'react';
import TypeWriter from 'react-typewriter';

const skills = [
	'React',
	'React Native',
	'Angular',
	'Backbone',
	'Less/Sass',
	'CSS3',
	'HTML5',
	'.NET',
	'Web Components',
	'Polymer',
	'Flexbox',
	'GraphQL',
	'node',
	'IIS',
	'Azure',
	'SQL',
	'Regular Expressions',
  	'ES5, ES6, ES7',
  	'D3',
  	'Agile/Scrum',
  	'git',
  	'Express',
  	'hapi',
  	'Flux',
	'Grunt',
  	'gulp',
	'Webpack',
	'Redux',
  	'MobX',
  	'...'
]


export default () => (
  <div className="skills">
	  <TypeWriter fixed={true} className="skills-span" typing={1}>{skills.map( ( s, i ) => <div className="skill-col" key={i}><p>{s}</p></div> )}</TypeWriter>
  </div>
)
