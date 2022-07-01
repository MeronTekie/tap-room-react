import React from 'react'
import PropTypes from 'prop-types'

const ReusableForm = (props) => {
  const min =120;
  const max =124;
  return (
    <div className='card'>
      <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input 
        type="text"
        name="name" 
        placeholder='Enter the name' />
        <input 
        type="text" 
        name="brandName"
        placeholder='Enter the brand' />
        <input
        type="number" 
        name="price" 
        placeholder='Enter the price'/>
        <input
        type="text" 
        name="alcoholContent" 
        placeholder='Enter the alcohol content ' />
        <input
        type="text" 
        name="type" 
        placeholder='Enter the type ' />
        <input
        type="number" 
        name="pints" 
        placeholder='Enter the pint amount'
        min={min}
        max={max}/>
        <button type='submit'>{props.buttonText}</button>
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