import React from 'react';

export const Generation = ({ cellStates }) => {

  const generation = cellStates.map(cellState => {
    return <span className={cellState}></span>
    }
  )

  return <div className="generation">{generation}</div>
}