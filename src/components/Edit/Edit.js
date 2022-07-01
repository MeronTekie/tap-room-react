import React from 'react'
import ReusableForm from '../ReusableForm/ReusableForm'
import PropTypes from'prop-types'

const Edit = (props) => {
  const {keg} =props;
  const editKeg=(event)=>{
    event.preventDefault();
    props.editKeg({
      name: event.target.name.value, 
      price:event.target.price.value,
      brewery: event.target.brewery.value,
      flavor: event.target.flavor.value,
      alcoholContent:event.target.alcoholContent.value, 
      pints:event.target.pints.value,
      id: keg.id
    });
  }
  return (
    <div>
        <React.Fragment>
        <ReusableForm 
            formSubmissionHandler={editKeg}
            buttonText="Edit the Keg information" />
        </React.Fragment>
    </div>
  )
}
Edit.propTypes = {
  editKeg: PropTypes.func
};

export default Edit