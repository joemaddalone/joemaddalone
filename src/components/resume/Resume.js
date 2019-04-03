import React from "react";
import data from "./resume-data";
import "./resume.css";
import twitter from "../../icon/icon-twitter.svg";
import github from "../../icon/icon-github.svg";
import linkedin from "../../icon/icon-linkedin.svg";
import youtube from "../../icon/icon-youtube.svg";
const avatarPath = process.env.PUBLIC_URL + "/";

const SideBar = props => (
  <aside className="sidebar">
    <section className="social-links">
      <h1>Get to to know me.</h1>
      <div className="links">
        <a target="_blank" href="http://youtube.com/joemaddalone">
          <img src={youtube} alt="" />
        </a>
        <a target="_blank" href="http://twitter.com/joemaddalone">
          <img src={twitter} alt="" />
        </a>
        <a target="_blank" href="http://linked.com/in/joemaddalone">
          <img src={linkedin} alt="" />
        </a>
        <a target="_blank" href="http://github.com/joemaddalone">
          <img src={github} alt="" />
        </a>
      </div>
    </section>
    <section>
      <h1>Skills.</h1>
      {props.skills.join(", ")}
    </section>
    <section className="personal">
      <h1>Personal projects.</h1>
      {props.personal.map((p, i) => (
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
      <h1 />
      <p>References available upon request.</p>
    </section>
  </aside>
);

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

const Resume = () => {
  return (
    <main>
      <header>
        <h1>
          <span className="thick">Joe</span>
          <span className="thin">Maddalone</span>
        </h1>
        <summary>
          Currently focused on JavaScript, but experienced in all aspects of web
          development including front and back end, cloud environments, CI/CD,
          and Agile methodologies.
        </summary>
        <aside>
          <div>
            <img src={`${avatarPath}avatar.jpg`} />
            <p>
              tel: +1 773-593-9645
              <br />
              email:{" "}
              <a href="mailto:joe.maddalone@gmail.com">
                joe.maddalone@gmail.com
              </a>
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
      <a className="pdf-link" href="./Joe-Maddalone-April-2019.pdf">.pdf</a>
    </main>
  );
};
export default Resume;


