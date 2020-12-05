import React, { Component } from 'react';

class Project extends Component {
  constructor(props) {
    super(props);

    this.project = props.project;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="project">
        <div className="w-100">
          <h2 className="mb-5">Projects</h2>
          {
            this.project.map((data, index) => (
              <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{data.name}</h3>
                  <p>{data.detail}</p>
                </div>
                <div className="resume-date text-md-right">
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}

export default Project;
