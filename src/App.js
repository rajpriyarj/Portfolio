import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Landing from './Components/Landing';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Awards from './Components/Awards';
import Interests from './Components/Interests';
import profileData from './profileData.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      project : profileData.project,
      education : profileData.education,
      skills : profileData.skills,
      awards : profileData.awards,
      interests : profileData.interests
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">
          <Landing landingData={this.state.landingData} />
          <hr className="m-0" />
          <Experience experience={this.state.experience} />
          <hr className="m-0" />
          <Project project={this.state.project} />
          <hr className="m-0" />
          <Education education={this.state.education}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Awards awards={this.state.awards} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
        </div>
      </div>
    );
  }
}

export default App;