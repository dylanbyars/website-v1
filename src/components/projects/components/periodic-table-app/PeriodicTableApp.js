import React, { Component } from 'react';
import axios from 'axios';
import Modal from './components/Modal';
import { Header } from './components/Header';
import { Group } from './components/Group';

class PeriodicTableApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // holds the element info when the ajax request launched when the component mounts returns data
      // null to start
      elements: null,
      // this is where the elements broken into groups will be stored
      mainGroups: null,
      fBlockGroups: null,
      // the active element, if one's selected by the user. Null to start.
      activeElementInfo: null,
      // boolean to determine if the modal is/should be open or not. False to start
      modalOpen: false
    }

    this.setModalElement = this.setModalElement.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }

  // launches an ajax request to the element data and stores that info in the PeriodicTable componenent's state
  componentDidMount() {
    const dataUrl = 'https://rawgit.com/dbyars/periodic-table-1/master/data.json'
    axios.get(dataUrl).then(response => {
      let returnedData = response.data.map(({
        atomicMass,
        atomicNumber,
        groupBlock,
        name,
        standardState,
        symbol,
        yearDiscovered,
        wiki
      }) => {
        return {
          mass: atomicMass,
          number: atomicNumber,
          group: groupBlock,
          name: name,
          state: standardState,
          symbol: symbol,
          yearDiscovered: yearDiscovered,
          wiki: wiki
        }
      })

      this.setState({
        elements: returnedData
      })

      // now that all of the element data is stored in state, create the groups
      const groups = [
        [1, 3, 11, 19, 37, 55, 87],
        [4, 12, 20, 38, 56, 88],
        [21, 39],
        [22, 40, 72, 104],
        [23, 41, 73, 105],
        [24, 42, 74, 106],
        [25, 43, 75, 107],
        [26, 44, 76, 108],
        [27, 45, 77, 109],
        [28, 46, 78, 110],
        [29, 47, 79, 111],
        [30, 48, 80, 112],
        [5, 13, 31, 49, 81, 113],
        [6, 14, 32, 50, 82, 114],
        [7, 15, 33, 51, 83, 115],
        [8, 16, 34, 52, 84, 116],
        [9, 17, 35, 53, 85, 117],
        [2, 10, 18, 36, 54, 86, 118]
      ]

      const fBlock = [
        [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71],
        [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]
      ]

      const getGroupElements = groupElements => {
        return this.state.elements.filter(element => {
          return groupElements.includes(element.number)
        })
      }

      //for the 2 empty spots in group 3
      const fillerElement = () => {
        return {
          mass: null,
          number: null,
          group: null,
          name: null,
          state: null,
          symbol: null,
          yearDiscovered: null,
          wiki: null
        }
      }

      this.setState({
        mainGroups: [
          getGroupElements(groups[0]), 
          getGroupElements(groups[1]),
          [...getGroupElements(groups[2]), fillerElement, fillerElement],
          getGroupElements(groups[3]),
          getGroupElements(groups[4]),
          getGroupElements(groups[5]),
          getGroupElements(groups[6]),
          getGroupElements(groups[7]),
          getGroupElements(groups[8]),
          getGroupElements(groups[9]),
          getGroupElements(groups[10]),
          getGroupElements(groups[11]),
          getGroupElements(groups[12]),
          getGroupElements(groups[13]),
          getGroupElements(groups[14]),
          getGroupElements(groups[15]),
          getGroupElements(groups[16]),
          getGroupElements(groups[17])
        ],
        fBlockGroups: [
          getGroupElements(fBlock[0]),
          getGroupElements(fBlock[1])
        ]
      })

    })
  }

  setModalElement(element, wiki, symbol, mass, number, state, group) {
    // this.setState({
    //   activeElementInfo: {
    //     activeElement: element,
    //     activeElementWiki: wiki,
    //     activeElementSymbol: symbol,
    //     activeElementMass: mass,
    //     activeElementNumber: number,
    //     activeElementState: state,
    //     activeElementGroup: group,
    //   },
    //   modalOpen: true
    // })

    this.setState({
      activeElementInfo: { element, wiki, symbol, mass, number, state, group },
      modalOpen: true
    })

  }

  closeModal() {
    this.setState({
      modalOpen: false
    })
  }

  render() {

    if (!this.state.mainGroups) {
      return (
        <div className="periodic-table-app">
          <div className="wandering-cubes">
            <div className="cube1" />
            <div className="cube2" />
          </div>
        </div>
      )
    } else {

      const mainGroups = this.state.mainGroups.map(group => {
        return <Group key={group[0].mass} elements={group} setModalElement={this.setModalElement} />
      })

      const fBlockGroups = this.state.fBlockGroups.map(group => {
        return <Group key={group[0].mass} elements={group} setModalElement={this.setModalElement} />
      })

      return (
        <div className="periodic-table-app">
          <div className="periodic-table">

            {this.state.modalOpen && <Modal onClose={this.closeModal} elementInfo={this.state.activeElementInfo} />}
            
            <Header />

            <div className="main-block">{mainGroups}</div>
            <div className="f-block">{fBlockGroups}</div>

          </div>
        </div>
      )
    }
  }
}

export default PeriodicTableApp;