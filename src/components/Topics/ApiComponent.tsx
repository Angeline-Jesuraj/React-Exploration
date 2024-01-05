import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface ApiData {
  userId: number
  id: number
  title: string
  body: string
}

const ApiComponent: React.FC = () => {
  const [apiData, setApiData] = useState<ApiData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        )
        setApiData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>API Component</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {apiData.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ApiComponent
