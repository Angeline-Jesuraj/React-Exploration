// Example for Asynchronous Operation
import React, { useState } from 'react'
import axios from 'axios'

const AsyncComponent = () => {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      )
      setData(response.data)
      console.log('Async operation result:', response.data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <h2>Asynchronous Component</h2>
      <button onClick={fetchData}>Run Asynchronous Operation</button>
      {data && <p>Data: {JSON.stringify(data)}</p>}
    </div>
  )
}

export default AsyncComponent
