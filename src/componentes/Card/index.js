import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Card({
  title,
  text,
  onClick,
  buttonText = 'Enviar'
}) {
  const [ isTitleHidden, seIsTitleHidden ] = useState(false);
  const toggleHiddenTitle = () => seIsTitleHidden(!isTitleHidden);
  return (
    <div className='card'>
      {
        !isTitleHidden && (
          <>
            <h1>{title}</h1>
            <hr />
          </>
        )
      }
      <p>{text}</p>
      <button onClick={onClick}>
        {buttonText}
      </button>
      <button onClick={toggleHiddenTitle}>
        Esconde titulo
      </button>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};

export default Card;