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
  name:PropTypes.string,
  brandName:PropTypes.string,
  alcoholContent:PropTypes.string,
  type:PropTypes.string,
  pints:PropTypes.number,
  price:PropTypes.number,
  id:PropTypes.string,
  whenKegClicked:PropTypes.func
}

export default Keg