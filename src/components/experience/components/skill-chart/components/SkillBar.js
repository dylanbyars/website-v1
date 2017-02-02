import React, { Component } from 'react';
import { TweenMax, Bounce, Elastic } from 'gsap';
import classNames from 'classnames';

class SkillBar extends Component {

  componentWillAppear(callback) {

    // figure out what the final width should be for the particular bar
    const getWidth = () => {
      switch (this.props.prowess) {
        case 'virtuoso':
          return '65vw'
          break
        case 'cozy':
          return '50vw'
          break
        case 'learning':
          return '35vw'
          break
        case 'fiddled':
          return '20vw'
          break
        case 'read':
          return '10vw'
          break
        default:
          return '5vw'
      }
    }

    const barElement = this.barContainer
    const labelElement = this.labelContainer
    const loadDelay = this.props.delay
    const barWidth = getWidth()
    
    // grows the bar with a bounce
    TweenMax.fromTo(barElement, 1.1, {
      width: "0%"
    }, {
      width: barWidth,
      delay: loadDelay,
      ease: Bounce.easeOut,
      onComplete: callback
    })

    // tips the label down
    TweenMax.to(
      labelElement, 
      1.1, 
      {
        scale: 1.15,
        rotation: -15, 
        y: 10,
        delay: loadDelay,
        ease: Elastic.easeOut,
        onComplete: callback
    })
  }

  render() {

    let { technology, prowess } = this.props

    let prowessStyles = classNames(prowess, 'bar')

    return (
      <div className="skill-bar">
        <div className="technology" ref={c => this.labelContainer = c}>{technology}</div>
        <div className="container__skill-bar">
          <div className={prowessStyles} ref={c => this.barContainer = c}>{prowess}</div>
        </div>
      </div>
    )
  }
}

export default SkillBar;