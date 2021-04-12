import React from 'react';
import PropTypes from 'prop-types';
import data from './resume-data';
import './resume.css';
import icons from '../icons';
import avatar from './avatar.jpg';

const SideBar = ({ skills, personal }) => (
	<aside className="sidebar">
		<section className="social-links">
			<h1>Get to to know me.</h1>
			<div className="links flex justify-around mt4">
				<a target="_blank" href="http://youtube.com/joemaddalone">
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d={icons.youtube} />
					</svg>
				</a>
				<a target="_blank" href="http://twitter.com/joemaddalone">
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d={icons.twitter} />
					</svg>
				</a>
				<a target="_blank" href="http://linked.com/in/joemaddalone">
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d={icons.linkedin} />
					</svg>
				</a>
				<a target="_blank" href="http://github.com/joemaddalone">
					<svg width="24" height="24" viewBox="0 0 24 24">
						<path d={icons.github} />
					</svg>
				</a>
			</div>
		</section>
		<section>
			<h1>Skills.</h1>
			{skills.join(', ')}
		</section>
		<section className="personal">
			<h1>Personal projects.</h1>
			{personal.map((p, i) => (
				<section className="project" key={i}>
					<p>
						<a href={p.url}>{p.title}</a>
						<br />
						{p.description}
					</p>
				</section>
			))}
		</section>
		<section className="refs">
			<p>References available upon request.</p>
		</section>
	</aside>
);

SideBar.propTypes = {
	personal: PropTypes.array,
	skills: PropTypes.array
};

const Job = ({ title, to, from, company, highlights }) => (
	<article>
		<h1>
			<div className="position">
				{company} - {title}
			</div>
			<div className="dates">
				{from} - {to}
			</div>
		</h1>
		<ul>
			{highlights.map((h, i) => (
				<li key={i}>{h}</li>
			))}
		</ul>
	</article>
);

Job.propTypes = {
	title: PropTypes.string,
	to: PropTypes.string,
	from: PropTypes.string,
	company: PropTypes.string,
	highlights: PropTypes.array
};

const Resume = () => {
	return (
		<main>
			<header>
				<h1>
					<span className="thick">Joe</span>
					<span className="thin">Maddalone</span>
				</h1>
				<summary>
					Currently focused on JavaScript, but experienced in all aspects of web development including front
					and back end, cloud environments, CI/CD, and Agile methodologies.
				</summary>
				<aside>
					<div>
						<img src={avatar} alt="Joe Maddalone" />
						<p>
							tel: +1 773-593-9645
							<br />
							email: <a href="mailto:joe.maddalone@gmail.com">joe.maddalone@gmail.com</a>
							<br />
							web: <a href="http://joemaddalone.com">joemaddalone.com</a>
						</p>
					</div>
				</aside>
			</header>
			<SideBar skills={data.skills} personal={data.personal} />
			<section className="experience">
				{data.work.map((d, i) => (
					<Job key={i} {...d} />
				))}
			</section>
			<a className="pdf-link" href="./Joe-Maddalone-April2021.pdf">
				.pdf
			</a>
		</main>
	);
};
export default Resume;
