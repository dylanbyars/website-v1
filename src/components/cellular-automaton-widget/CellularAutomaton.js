import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import { Generation } from './Generation';

class CellularAutomaton extends Component {

  constructor() {
    super()
    
    const randomRule = (max) => {
      
      const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      }

      // determine a random rule to use
      return getRandomInt(0, max)
    }

    this.state = {
      generations: null,
      rule: randomRule(1),
      rules: [
        // rule 126
        {
          '1,1,1': 'inactive',
          '0,0,0': 'inactive',
          '1,1,0': 'active',
          '1,0,1': 'active',
          '1,0,0': 'active',
          '0,1,1': 'active',
          '0,1,0': 'active',
          '0,0,1': 'active'
        },
        // rule 60
        {
          '1,1,1': 'inactive',
          '0,0,0': 'inactive',
          '1,1,0': 'inactive',
          '1,0,1': 'active',
          '1,0,0': 'active',
          '0,1,1': 'active',
          '0,1,0': 'active',
          '0,0,1': 'inactive'
        }
      ]
    }
    
    this.nextGeneration = this.nextGeneration.bind(this)
    this.generationInterval = this.generationInterval.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  
  handleResize() {
    this.componentWillMount()
  }
  
  nextGeneration(prevGeneration) {
    
    // function for getting the state of a cell and its neighbors from a previous generation
    const prevCellState = (prevGeneration, newCell) => {
      
      const isActive = (i) => {
        if (i === 'active') {
          return 1
        } else {
          return 0
        }
      }
      
      let self = prevGeneration[newCell]
      let leftSibling = prevGeneration[newCell - 1] || prevGeneration[prevGeneration.length - 1]
      let rightSibling = prevGeneration[newCell + 1] || prevGeneration[0]
      return [leftSibling, self, rightSibling].map(item => isActive(item))
    }
    
    // function to determine a new row's cell's state based on a previous generation
    const nextCellState = (prevStates) => {
      let cases = Object.keys(this.state.rules[this.state.rule])
      let states = Object.values(this.state.rules[this.state.rule])
      switch(prevStates.toString()) {
        case cases[0]: 
          return states[0]
          break
        case cases[1]: 
          return states[1]
          break
        case cases[2]: 
          return states[2]
          break
        case cases[3]: 
          return states[3]
          break
        case cases[4]: 
          return states[4]
          break
        case cases[5]: 
          return states[5]
          break
        case cases[6]: 
          return states[6]
          break
        case cases[7]: 
          return states[7]
          break
        }
    }
    
    return prevGeneration.map((cell, index) => {
      return nextCellState(prevCellState(prevGeneration, index))
    })

  }
  
  generationInterval() {
    let currentState = this.state.generations
    let nextGeneration = this.nextGeneration(currentState[currentState.length - 1])
    // check if the new generation is either all active or inactive
    // if it is, scrap the whole lineage and start over
    if (!nextGeneration.includes('active')) {
      this.componentWillMount()
    } else if (!nextGeneration.includes('inactive')) {
      this.componentWillMount()
    } else {
      let newState = [...currentState.slice(1), nextGeneration]
      this.setState({generations: newState})
    }
  }
  
  componentWillMount() {
    
    // make rows with enough cells to fill the window's width
    const cellCount = Math.floor(window.innerWidth / 12)

    // initialize an array to hold all of the generations
    let generations = []
    
    // generate a random row to start
    let initialCellStates = []
    
    for (let i = 0; i < cellCount; i++) {

      const getRandomBinary = () => {
        return Math.floor(Math.random() * 2)
      }

      let cellState = getRandomBinary() ? 'active' : 'inactive'

      initialCellStates.push(cellState)
    }
    
    // pop the random cell states into the generations array to start
    generations.push(initialCellStates)
    
    // On initial render, build a quarter page's-worth of rows
    let rows = Math.floor((window.innerHeight / 12) /5);
    
    for (let i = 0; i < rows; i++) {
      generations.push(this.nextGeneration(generations[i]))
    }
    
    this.setState({generations: [...generations]})
  }
  
  componentDidMount() {
    setInterval(this.generationInterval, 750)
    // adding a debounce function to the event listener so that the window resize event isn't called constantly while the window's actually being resized.
    window.addEventListener('resize', debounce(this.handleResize, 300, {leading: true, trailing: true}))
  }
  
  componentWillUnmount() {
    clearInterval(this.generationInterval)
    // remove event listener
    window.removeEventListener('resize', debounce(this.handleResize, 300, {leading: true, trailing: true}))
  }

  render() {
    
    const generations = this.state.generations.map(cellStates => {
      return <Generation cellStates={cellStates} />
    })
    
    return (
      <div className="generations">
        {generations}
      </div>
    )
  }

}

export default CellularAutomaton;