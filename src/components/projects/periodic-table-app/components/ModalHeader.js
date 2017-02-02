import React from 'react';

export const ModalHeader = ({ title, image }) => {

  const altText = `A picture of ${title}`

  return (
    <div className="modal-header">
      <img className="modal-header__image" alt={altText} src={image}/>
      <div className="modal-header__title">{title}</div>
    </div>
  )
}