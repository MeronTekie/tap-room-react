import React from 'react'
import PropTypes from 'prop-types'
import "bootstrap/dist/css/bootstrap.css";

const ReusableForm = (props) => {
  return (
    <div className='card'>
      <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
      <br />
        <input 
        type="text"
        name="name" 
        placeholder='Name:' />
        <br />
        <br />
        <input 
        type="text" 
        name="brandName"
        placeholder='Brand:' />
        <br />
        <br />
        <input
        type="number" 
        name="price" 
        placeholder='Price:'/>
        <br />
        <br />
        <input
        type="text" 
        name="alcoholContent" 
        placeholder='Alcohol Content: ' />
        <br />
        <br />
        <input
        type="text" 
        name="type" 
        placeholder='Type:' />
        <br />
        <br />
        <button type='submit' className='btn btn-success'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  </div>
    
  )
}
ReusableForm.propTypes ={
  formSubmissionHandler:PropTypes.func,
  buttonText :PropTypes.string
}

export default ReusableForm