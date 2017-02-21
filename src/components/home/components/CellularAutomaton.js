import React, { Component } from 'react';
import { Generation } from './Generation';

class CellularAutomaton extends Component {

  constructor() {
    super()

    // make rows with enough cells to fill the window's width
    const cellCount = Math.floor(window.innerWidth / 4)

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
      switch(prevStates.toString()) {
        case '1,1,1': 
          return 'inactive'
          break
        case '0,0,0': 
          return 'inactive'
          break
        case '1,1,0': 
          return 'active'
          break
        case '1,0,1': 
          return 'active'
          break
        case '1,0,0': 
          return 'active'
          break
        case '0,1,1': 
          return 'active'
          break
        case '0,1,0': 
          return 'active'
          break
        case '0,0,1': 
          return 'active'
          break
        }
    }
        
    // number of rows to generate
    let rows = Math.floor(window.innerHeight / 4)
    
    // generate all rows based on the initial random row
    for (let i = 0; i < rows; i++) {
      let generation = []
      for (let j = 0; j < generations[i].length; j++) {
        generation.push(nextCellState(prevCellState(generations[i], j)))
      }
      generations.push(generation)
    }

    this.state = {
      generations: [...generations]
    }

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