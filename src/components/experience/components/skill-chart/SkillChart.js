import React, { Component } from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import SkillBar from './SkillBar';

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
      <div className="skill-chart">
        <div className="skill-chart__widget">{this.setSkillBars()}</div>
        <div className="skill-chart__key">
          <div className="key__virtuoso">Virtuoso</div>
          <div className="key__cozy">Cozy</div>
          <div className="key__learning">Learning to Love</div>
          <div className="key__fiddled">Fiddled With</div>
          <div className="key__read">Read the Docs</div>
        </div>
      </div>
    )
  }
}

export default SkillChart;