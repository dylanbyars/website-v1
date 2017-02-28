import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
import SkillBar from './SkillBar';
import { Key } from './Key';

export const SkillChart = () => {

  const skills = [{
  "HTML5": "virtuoso"
}, {
  "CSS3 / SCSS": "virtuoso"
}, {
  "Javascript": "cozy"
}, {
  "React": "cozy"
}, {
  "Redux": "learning"
}, {
  "Polymer": "learning"
}, {
  "Firebase": "fiddled"
}, {
  "Git": "cozy"
}, {
  "jQuery": "learning"
}, {
  "Webpack": "learning"
}, {
  "Bower": "fiddled"
}, {
  "Node.js": "learning"
}, {
  "Wordpress": "fiddled"
}, , {
  "Python": "fiddled"
}, {
  "GreenSock": "fiddled"
}, ]

  const skillBars = () => {
    let delay = 0.4
    return skills.map(skill => {
      let tech = Object.keys(skill)[0]
      let prow = skill[tech]
      delay += .15
      return (
        <ReactTransitionGroup>
          <SkillBar key={tech} technology={tech} prowess={prow} delay={delay} />
        </ReactTransitionGroup>
      )
    })
  }

  return (
    <div className="skill-chart">
      {skillBars()}
      <Key />
    </div>
  )
}