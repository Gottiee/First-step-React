import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  return (
    <button className='btn'
    onClick={onClick}
    style={{ backgroundColor:color }}>
    {text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

// set up les types attendu par nos variables dans bouton
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button