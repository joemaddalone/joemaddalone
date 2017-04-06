import React from 'react';
import { Motion, spring, presets } from 'react-motion';
import '../../css/joemaddalone.css';
import './home.css'
import twitter from '../../icon/icon-twitter.svg'
import github from '../../icon/icon-github.svg'
import linkedin from '../../icon/icon-linkedin.svg'
import youtube from '../../icon/icon-youtube.svg'
import cv from '../../icon/icon-cv.svg'
import { Link } from 'react-router-dom';
const InternalLink = ( props ) => <Link to={props.url}><img src={props.icon} style={{ width: 32, height: 32 }}/></Link>;
const ExternalLink = ( props ) => <a href={props.url}><img src={props.icon} style={{ width: 32, height: 32 }}/></a>;


const mobileCheck = function() {
	var check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
}

class CharSpinner extends React.Component {
	constructor () {
		super();
		this.chars = '\',abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.'.split( '' );
	}
	
	findPos = ( char ) => {
		return this.chars.indexOf( char );
	};
	
	render () {
		return (
		  <Motion defaultStyle={{ top: 0 }} style={{ top: spring( this.findPos( this.props.char ), presets.wobbly ) }}>
			  {val => {
				  let style = {
					  position: 'absolute',
					  top: (val.top * 55) * -1
				  };
				  return (
					<div className="tile">
						<div style={style}>
							{this.chars.map( char => {
								let tileClass = 'tile-char';
								if ( char === this.props.char ) {
									tileClass += ' active '
								}
								return <div key={char} className={tileClass}>{char}</div>
							} )}
						</div>
					</div>
				  )
			  }}
		  </Motion>
		)
	}
}


const CharSpinners = ( { str } ) => (
  <div className="spinners-holder">{str.split( '' ).map( ( char, i ) => <CharSpinner key={i} char={char}/> )}</div>
);

const Elsewhere = () => {
	let wheres = [
		{ txt: 'egghead.io', url: "http://www.egghead.io/instructors/joe-maddalone" },
		{ txt: 'htmlstack', url: 'http://www.htmlstack.com' },
		{ txt: 'JavascriptOO', url: 'http://www.javascriptoo.com' },
		{ txt: 'FillText', url: 'http://www.filltext.com' },
		{ txt: 'LearnYou.it', url: 'http://www.learnyou.it' },
		{ txt: 'PackageManager.org', url: 'http://www.packagemanager.org' },
		{ txt: 'printz', url: 'http://www.printz.org' },
		{ txt: 'Insert Title', url: 'http://www.insert-title.com' },
	];
	let links = wheres.map( ( w, i ) => <a key={i} href={w.url}>{w.txt}</a> );
	return <div className="elsewhere"><h2>ElseWhere</h2>{links}</div>;
};

const Controls = ( props ) => {
	let controls = [
		{ txt: 'Twitter', icon: twitter, url: "http://www.twitter.com/joemaddalone", type: 'external' },
		{ txt: 'Github', icon: github, url: 'http://www.github.com/joemaddalone', type: 'external' },
		{ txt: 'LinkedIn', icon: linkedin, url: 'http://www.linkedin.com/in/joemaddalone', type: 'external' },
		{ txt: 'YouTube', icon: youtube, url: 'http://www.youtube.com/joemaddalone', type: 'external' },
		// { txt: 'My Resume', icon: cv, url: '/#/resume', type: 'internal' }
	];
	return (
	  <div className="tile-controls">
		  {controls.map( ( control, i ) => <Control url={control.url} key={i} m={props.m} txt={control.txt}
			icon={control.icon}/> )}
	  </div>
	);
};

const Control = ( props ) => (
  <div className="control-item" onMouseOver={props.m.bind( null, props.txt )}>
	  { props.type === 'internal'
		? <InternalLink {...props} />
		: <ExternalLink {...props} />}
  </div>
);


class Home extends React.Component {
	constructor () {
		super();
		this.state = { stdOut: 'Hi, I\'m Joe' }
	}
	
	setString ( s ) {
		this.setState( { stdOut: s } );
	}
	
	render () {
		return (
		  <div className="home">
			  {!mobileCheck() ? <div className="tiles"><CharSpinners str={this.state.stdOut}/></div>: <h1 className="mobile-h1">Hi, I'm Joe</h1>}
			  <Controls m={this.setString.bind( this )}/>
			  <Elsewhere />
		  </div>
		);
	}
}


export default Home
