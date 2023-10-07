import React, { useState } from 'react'

export default function Form() {
  const [inputValue, setInputValue] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = JSON.stringify(inputValue)
    
    fetch('http://localhost:3030/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    })
  }


  return (
    <form className='formLayout'>
      <input className='formInput' type='text' value={inputValue.name} name='Name' onChange={(e) => handleChange(e)} placeholder='Name'/>
      <input className='formInput' type='email' value={inputValue.email} name='Email' onChange={(e) => handleChange(e)} placeholder='Email'/>
      <textarea className='formTxtArea' rows={5} value={inputValue.text} name='Text' onChange={(e) => handleChange(e)} placeholder='Your message...'/>
      <input className='bigBtn' type='submit' value='Submit' onClick={(e) => handleSubmit(e)}/>
    </form>
  )
}
