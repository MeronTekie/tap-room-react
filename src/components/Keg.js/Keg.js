import React from 'react'
import PropTypes from 'prop-types'

const Keg = (props) => {
  return (
    <div>
      <React.Fragment>
            <div onClick = {()=> props.whenKegClicked(props.id)}>
                <h3>{props.name}</h3>
            </div>
        </React.Fragment>
    </div>
  )
}
Keg.propTypes ={
  name:PropTypes.string.isRequired,
  brandName:PropTypes.string.isRequired,
  alcoholContent:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  pints:PropTypes.number,
  price:PropTypes.number.isRequired,
  id:PropTypes.string,
  whenKegClicked:PropTypes.func
}

export default Keg