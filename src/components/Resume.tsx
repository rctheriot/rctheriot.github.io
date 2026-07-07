import { education, experience, publications, skills } from '../data/resume'

export function Resume() {
  return (
    <div className="resume">
      <section className="resume-block">
        <h3 className="resume-heading">Work Experience</h3>
        {experience.map((job) => (
          <div key={`${job.company}-${job.title}`} className="resume-item">
            <div className="resume-item-head">
              <h4 className="resume-job-title">{job.title}</h4>
              <span className="resume-date">{job.date}</span>
            </div>
            <div className="resume-meta">
              <span className="resume-company">{job.company}</span>
              <span className="resume-location">{job.location}</span>
            </div>
            <ul className="resume-bullets">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="resume-block">
        <h3 className="resume-heading">Education</h3>
        {education.map((ed) => (
          <div key={ed.degree} className="resume-item">
            <div className="resume-item-head">
              <h4 className="resume-job-title">{ed.degree}</h4>
              <span className="resume-date">{ed.date}</span>
            </div>
            <div className="resume-meta">
              <span className="resume-company">{ed.school}</span>
              <span className="resume-location">{ed.location}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="resume-block">
        <h3 className="resume-heading">Publications</h3>
        <ul className="publications">
          {publications.map((pub) => (
            <li key={pub.doi}>
              <strong>{pub.title}.</strong> {pub.venue}.{' '}
              <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                DOI: {pub.doi}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="resume-block">
        <h3 className="resume-heading">Skills &amp; Interests</h3>
        <div className="skills">
          <p>
            <strong>Technologies:</strong> {skills.technologies}
          </p>
          <p>
            <strong>Skills:</strong> {skills.skills}
          </p>
          <p>
            <strong>Interests:</strong> {skills.interests}
          </p>
        </div>
      </section>
    </div>
  )
}
