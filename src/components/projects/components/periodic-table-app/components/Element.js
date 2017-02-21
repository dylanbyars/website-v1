import React from 'react';

const classNames = require('classnames');

export const Element = ({
  mass,
  number,
  group,
  name,
  state,
  symbol,
  yearDiscovered,
  wiki,
  setModalElement
}) => {

  let groupStyle = (group) => {
    if (!group) {
      return ''
    } else {
      return group.split(' ').join('-')
    }
  }

  let stateStyle = (state) => {
    if (state === '') {
      return 'state-unknown'
    } else {
      return state
    }
  }

  let styles = classNames('pt-element', groupStyle(group), stateStyle(state))

  return (
    <div className={styles} onClick={() => setModalElement(name, wiki, symbol, mass, number, state, group)}>
      <div className="pt-symbol">{symbol}</div>
      <div className="pt-number">{number}</div>
    </div>
  )
}