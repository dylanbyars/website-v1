import React, { Component } from 'react';
import { TweenMax, Bounce, Elastic } from 'gsap';
import classNames from 'classnames';

class SkillBar extends Component {

  componentWillAppear(callback) {

    // figure out what the final width should be for the particular bar
    // need to calculate it here instead of relying on CSS in order for the tween to work
    const getWidth = () => {
      switch (this.props.prowess) {
        case 'virtuoso':
          return '80vw'
          break
        case 'cozy':
          return '65vw'
          break
        case 'learning':
          return '50vw'
          break
        case 'fiddled':
          return '35vw'
          break
        case 'read':
          return '20vw'
          break
      }
    }

    const el = this.container
    const loadDelay = this.props.delay
    const barWidth = getWidth()

    // grows the bar with a bounce
    TweenMax.fromTo(el, 1.1, {
      width: "0%"
    }, {
      width: barWidth,
      delay: loadDelay,
      ease: Bounce.easeOut,
      onComplete: callback
    })
  }

  render() {

    let {
      technology,
      prowess
    } = this.props

    return (
      <div className="skill-bar">
        <div className={`${prowess} bar`} ref={c => this.container = c}>{technology}</div>
      </div>
    )
  }
}

export default SkillBar;