import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import SkillBar from './components/SkillBar';
import { Key } from './components/Key';

class SkillChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: [{
        "HTML5": "virtuoso"
      }, {
        "CSS3": "virtuoso"
      }, {
        "Javascript": "cozy"
      }, {
        "React": "cozy"
      }, {
        "Redux": "learning"
      }, {
        "Polymer": "learning"
      }, {
        "jQuery": "learning"
      }, {
        "Wordpress": "fiddled"
      }, {
        "Webpack": "learning"
      }, {
        "Bower": "fiddled"
      }, {
        "Git": "cozy"
      }, {
        "Node.js": "learning"
      }, {
        "Python": "fiddled"
      }, {
        "Firebase": "read"
      }, {
        "C++": "read"
      }]
    }

    this.setSkillBars = this.setSkillBars.bind(this)

  }

  setSkillBars() {
    let delay = .4
    const skillBars = this.state.skills.map(skill => {
      let tech = Object.keys(skill)[0]
      let prow = skill[tech]
      delay += .15
      return (
        <ReactTransitionGroup>
          <SkillBar key={tech} technology={tech} prowess={prow} delay={delay} />
        </ReactTransitionGroup>
      )
    })
    return skillBars
  }

  render() {
    return (
      <div className="container__skill-chart">
        <div className="skill-chart__header">Skills</div>
        <div className="skill-chart__widget">{this.setSkillBars()}</div>
        <Key />
      </div>
    )
  }
}

export default SkillChart;