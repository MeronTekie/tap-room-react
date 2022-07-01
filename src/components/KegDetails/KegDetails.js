import React from 'react'
import PropTypes from "prop-types"


const KegDetails = (props) => {
  const{ keg, onClickDelete} =props;
  return (
    <React.Fragment>
      <h1>{keg.name} Details</h1>
      <p>{keg.price}</p>
      <p>{keg.alcoholContent} % alcohol level</p>
      <p>{keg.pints}</p>
        <button onClick={ props.onClickEdit }>Update Keg Info</button>
        <button onClick={ props.onClickDecrement }>Decrement Pint</button>
        <button onClick={()=> onClickDelete(keg.id)}>Delete Keg</button>
    </React.Fragment>
  )
}
KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickDelete: PropTypes.func,
  onClickEdit: PropTypes.func,
  onClickDecrement: PropTypes.func
};

export default KegDetails