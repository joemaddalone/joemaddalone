import React from 'react';
import { Motion, spring, presets } from 'react-motion';
class CharSpinner extends React.Component {

  constructor(){
    super();
    this.chars = '\', @-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.'.split('');
  }

  findPos = (char) => {
    return this.chars.indexOf(char);
  }

  render(){
    return (
      <Motion defaultStyle={{top: 0}} style={{top: spring(this.findPos(this.props.char), presets.wobbly) }}>
      {val => {
        let style = {
          position: 'absolute',
          top: (val.top*55)*-1
        }
        return (
          <div className="tile">
            <div style={style}>
              {this.chars.map(char => {
                let tileClass = 'tile-char';
                if(char === this.props.char){
                  tileClass += ' active '
                }
                return <div key={char} className={tileClass}>{char}</div>
              })}
            </div>
          </div>
        )
      }}
      </Motion>
    )
  }
}

class CharSpinners extends React.Component {
  constructor(){
    super();
  }
  render(){
    let spinners = this.props.str.split('').map((char, i) => <CharSpinner key={i} char={char} />)
    return (
      <div className="spinners-holder">{spinners}</div>
    );
  }
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {stdOut: 'Hi , I\'m Joe'}
  }

  setString(s){
    this.setState({stdOut: s});
  }

  render(){
    return (
      <div>
        <div className="tiles">
          <CharSpinners str={this.state.stdOut} />
        </div>
        <Controls m={this.setString.bind(this)} />
        <Elsewhere />
      </div>
    );
  }
}

class Elsewhere extends React.Component {
  render(){
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
    let links = wheres.map((w, i) => <a key={i} href={w.url}>{w.txt}</a>);
    return <div className="elsewhere"><h2>ElseWhere</h2>{links}</div>;
  }
}

class Controls extends React.Component {
  render(){
    let controls = [
          { txt: 'Twitter', content: "twitterbird", url: "http://www.twitter.com/joemaddalone" },
          { txt: 'Github', content: "githubalt", url: 'http://www.github.com/joemaddalone' },
          { txt: 'LinkedIn', content: "linkedin", url: 'http://www.linkedin.com/in/joemaddalone' },
          { txt: 'YouTube', content: "youtube", url: 'http://www.youtube.com/joemaddalone' }
    ]
    return  (
      <div className="tile-controls">
        {controls.map((control, i) => <Control url={control.url} key={i} m={this.props.m} txt={control.txt} content={control.content} />)}
      </div>
    );
  }
}

class Control extends React.Component {
  render(){
    return (
      <div className="control-item" onMouseOver={this.props.m.bind(null,this.props.txt)}>
        <a href={this.props.url} target="_blank">
          <span className='symbol'>{this.props.content}</span>
        </a>
      </div>
    );
  }
}

React.render(React.createElement(App), document.getElementById('app'));
