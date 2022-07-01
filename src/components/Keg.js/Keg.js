import React from 'react'
import PropTypes from 'prop-types'

const Keg = (props) => {
  return (
    <div>
    </div>
  )
}
Keg.propTypes ={
  name:PropTypes.string,
  brandName:PropTypes.string,
  alcoholContent:PropTypes.string,
  type:PropTypes.string,
  pints:PropTypes.number,
  price:PropTypes.number,
  id:PropTypes.string
}

export default Keg