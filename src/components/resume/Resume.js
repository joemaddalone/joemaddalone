import React from 'react';
const data = require('./resume-data')
import './resume.css'
import twitter from '../../icon/icon-twitter.svg'
import github from '../../icon/icon-github.svg'
import linkedin from '../../icon/icon-linkedin.svg'
import youtube from '../../icon/icon-youtube.svg'


const SideBar = (props) => (
	<div>
		<section>
			<h1>Contact me.</h1>
			<p>
				<a href="mailto:joe.maddalone@gmail.com">joe.maddalone@gmail.com</a>
				<br />
			</p>
			<p>773.593.9645</p>
		</section>
		<section className="social-links">
			<h1>Get to to know me.</h1>
			<a target="_blank" href="http://youtube.com/joemaddalone" >
				<img src={youtube} alt="" />
			</a>
			<a target="_blank" href="http://twitter.com/joemaddalone" >
				<img src={twitter} alt="" />
			</a>
			<a target="_blank" href="http://linked.com/in/joemaddalone" >
				<img src={linkedin} alt="" />
			</a>
			<a target="_blank" href="http://github.com/joemaddalone" >
				<img src={github} alt="" />
			</a>
		</section>
		<section>
			<h1>Skills.</h1>
			{props.skills.join(', ')}
		</section>
		<section className="personal">
			<h1>Personal projects.</h1>
			{props.personal.map((p, i) => (
				<div className="project" key={i}>
					<p>
						<a href={p.url}>{p.title}</a><br />
						{p.description}
					</p>
				</div>
			))}
		</section>
		<section className="refs">
			<h1>References.</h1>
			<p>References available upon request.</p>
		</section>
	</div>
)

const Job = ({ title, to, from, company, highlights }) => (
	<div className="job">
		<h1>{company} - {title} ({from} - {to})</h1>
		<ul>
			{highlights.map((h, i) => <li key={i}>{h}</li>)}
		</ul>
	</div>
)

const Resume = () => {
	return (
		<div>
			<div className="header">
				<h1>Joe Maddalone</h1>
				<a href="/Joe-Maddalone-May2017.pdf" target="_blank">PDF</a>
			</div>
			<div className="resume">
				<div className="left-col">
					<SideBar skills={data.skills} personal={data.personal} />
				</div>
				<div className="right-col">
					{data.work.map((d, i) => <Job key={i} {...d} />)}
				</div>
			</div>
		</div>

	)
}
export default Resume;