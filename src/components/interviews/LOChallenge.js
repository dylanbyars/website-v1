import React, { Component } from 'react'
import axios from 'axios'
import { ModalContainer, ModalDialog } from 'react-modal-dialog'

import { TagTile } from './components/TagTile'

// styles: https://github.com/dbyars/dylan-byars-v2/blob/redesign1/src/styles/pages/_lo-challenge.scss

export default class LOChallenge extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tags: {},
      modalOpen: false,
      modalTitle: null,
      modalInfo: null
    }
    this.setModalInfo = this.setModalInfo.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  componentDidMount() {
    // the base string for the endpoint we're after
    let BASE_URL = 'https://api.stackexchange.com/2.2'

    // build the actual URL that axios uses for the ajax request
    // this endpoint returns the 30 most popular tags on stackoverflow
    let url = `${BASE_URL}/tags?order=desc&sort=popular&site=stackoverflow`

    // collect the tag objects and make each into an object stored in App state
    // the count is equivalent to popularity
    axios.get(url)
      .then(response => {
        // shuffle the tags before putting them into state
        // adapted from an excellent article on shuffling algorithms
        // https://bost.ocks.org/mike/shuffle/
        const shuffle = (array) => {
          let m = array.length, t, i;
          // While there remain elements to shuffle
          while (m) {
            // Pick a remaining element
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }
          return array;
        }

        let tags = response.data.items.map(
          item => ({
            name: item.name,
            count: item.count
          }))

        this.setState({
          tags: shuffle(tags)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  setModalInfo(tag) {
    // make a call to the api to return the most frequently 
    // asked questions for the selected tag
    const BASE_URL = 'https://api.stackexchange.com/2.2'

    let url = `${BASE_URL}/tags/${tag}/faq?site=stackoverflow`

    axios.get(url)
      .then(response => {
        let info = response.data.items.map(
          item => ({
            question: item.title,
            link: item.link
          }))

        this.setState({
          modalOpen: true,
          modalTitle: tag,
          modalInfo: info
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  closeModal() {
    this.setState({
      modalOpen: false
    })
  }

  render() {

    // if there's info returned from the api ready to display...
    if (this.state.tags.length) {

      const tagTiles = this.state.tags.map(
        ({ name, count }) => {
          return <TagTile 
            key={name} 
            name={name} 
            count={count}
            setModalInfo={this.setModalInfo} />
        })

      return (
        <div className="LOChallenge">
          {
            this.state.modalOpen && 
            
            <ModalContainer onClose={this.closeModal}>
              <ModalDialog onClose={this.closeModal}>
                <h1>faqs -- {this.state.modalTitle}</h1>
                {
                  this.state.modalInfo.map(({question, link}) => {
                    return (
                      <div className="modal__item">
                        <a href={link}>{question}</a>
                      </div>
                    )
                  })
                }
              </ModalDialog>
            </ModalContainer>
          }
          <header>
            <a className="code" href="https://github.com/dbyars/dylan-byars-v2/tree/redesign1/src/components/interviews">code</a>
            <h1>faqs by tag</h1>
            <h3>bigger circle === more popular</h3>
          </header>
          <div className="tags">
            {tagTiles}
          </div>
        </div>
      )
    // if the response hasn't come in yet, show a nice spinner
    } else {
      return (
        <div className="LOChallenge">
          <div className="wandering-cubes">
            <div className="cube1" />
            <div className="cube2" />
          </div>
        </div>
      )
    }
    
  }
}