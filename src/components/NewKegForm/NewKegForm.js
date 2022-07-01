import React from 'react'
import { v4 } from 'uuid'
import PropTypes from 'prop-types'
import ReusableForm from '../ReusableForm/ReusableForm'
import './NewKegForm.css'

const NewKegForm = (props) => {
 const  newKegFormSubmission=(event)=>{
    event.preventDefault();
    props.newKegCreation({
      name: event.target.name.value, 
      price: parseInt(event.target.price.value),
      brewery: event.target.brewery.value,
      flavor: event.target.flavor.value,
      alcoholContent: parseInt(event.target.alcoholContent.value), 
      pints: parseInt(event.target.pints.value),
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
  newKegCreation:PropTypes.func
}


export default NewKegForm