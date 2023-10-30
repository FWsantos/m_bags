import './App.css'
import { useState, useEffect } from 'react'

interface Author {
  id: number;
  email: string;
  name: string;
}

interface DataItem {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  content: string;
  published: boolean;
  view_count: number;
  author_id: number;
  author: Author;
}

function App() {
  const [data, setData] = useState<DataItem[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/feed')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      <p>List of recomendations</p>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <h3>{item.author.name}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App