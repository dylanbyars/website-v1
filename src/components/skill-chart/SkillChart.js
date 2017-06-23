import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import ReactTransitionGroup from 'react-addons-transition-group';
import SkillBar from './SkillBar';
import { Key } from './Key';

class SkillChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: [
        {
          "HTML5": "virtuoso"
        }, {
          "CSS3 / SCSS": "virtuoso"
        }, {
          "JavaScript": "cozy"
        }, {
          "React": "cozy"
        }, {
          "Redux": "learning"
        }, {
          "Angular": "learning"
        }, {
          "TypeScript": "learning"
        }, {
          "Git / SVN": "cozy"
        }, {
          "jQuery": "learning"
        }, {
          "Webpack": "learning"
        }, {
          "Spring / JSP": "cozy"
        }, {
          "Node.js": "learning"
        }, {
          "Wordpress": "fiddled"
        }, {
          "PHP": "fiddled"
        }, {
          "Python": "fiddled"
        }],
        scrolled: false
      }

      this.scrolled = this.scrolled.bind(this)
  }

  componentDidMount() {
    // adding a debounced event listener so that the bars aren't actually displayed until the user starts scrolling on the page
    window.addEventListener('scroll', debounce(this.scrolled, 150, {leading: true, trailing: false}))
  }

  scrolled() {
    console.log('scroll fired from experience')
    if (!this.state.scrolled) {
      this.setState({scrolled: true})
    }
    // remove the event listener since they've already seen the action the event listener was waiting for. 
    // Not working for some reason...
    window.removeEventListener('scroll', debounce(this.scrolled, 150, {leading: true, trailing: false}))
  }

  render() {

    if (!this.state.scrolled) {
      return null
    } else {
      const skillBars = () => {
        let delay = 0
        return this.state.skills.map(skill => {
          let tech = Object.keys(skill)[0]
          let prow = skill[tech]
          delay += .15
          return (
            <ReactTransitionGroup key={`${tech}${delay}`}>
              <SkillBar technology={tech} prowess={prow} delay={delay} />
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

    // const skillBars = () => {
    //     let delay = 0
    //     return this.state.skills.map(skill => {
    //       let tech = Object.keys(skill)[0]
    //       let prow = skill[tech]
    //       delay += .15
    //       return (
    //         <ReactTransitionGroup key={`${tech}${delay}`}>
    //           <SkillBar technology={tech} prowess={prow} delay={delay} />
    //         </ReactTransitionGroup>
    //       )
    //     })
    //   }

    //   return (
    //     <div className="skill-chart">
    //       {skillBars()}
    //       <Key />
    //     </div>
    //   )

  }
}

export default SkillChart;