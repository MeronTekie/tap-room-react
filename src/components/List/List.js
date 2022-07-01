import React from 'react'
import Keg from '../Keg.js/Keg'
import PropTypes from 'prop-types'


const List = (props) => {
  return (
    <div>
      {props.list.map(keg=>
        <Keg
        whenClicked={props.onSelect}
        name={keg.name}
        id={keg.id}
        key ={keg.id}
        />)}
    </div>
  )
}
List.propTypes ={
  list:PropTypes.array,
  onSelect:PropTypes.func
}

export default List