import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import ReusableForm from '../ReusableForm/ReusableForm'
import './NewKegForm.css'

 const NewKegForm = (props) => {
  const  newKegFormSubmission=(event)=>{
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value, 
      country: event.target.country.value,
      price: parseInt(event.target.price.value),
      alcoholContent: parseInt(event.target.alcoholContent.value), 
      type: event.target.type.value,
      pints: 124,
      id: v4()
    })

  }

  return (
    <div className='card'>
      <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={newKegFormSubmission}
        buttonText="Click here to Add" />
      </React.Fragment> 
    </div>
  )
}
NewKegForm.propTypes ={
  onNewKegCreation:PropTypes.func
}


export default NewKegForm