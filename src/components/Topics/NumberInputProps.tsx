import React, { FC, useState } from 'react'

const NumberInput: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Ensure only numbers are entered
    const filteredValue = event.target.value.replace(/[^0-9]/g, '')
    setInputValue(filteredValue)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault() // Prevent form submission
    setMessage(`You typed the number: ${inputValue}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <button type="submit">Submit</button>
      {message && <p>{message}</p>}
    </form>
  )
}

export default NumberInput
