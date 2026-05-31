import React, { useEffect, useState } from 'react'

export default function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    fetch('/api/hello')
      .then((r) => r.json())
      .then((d) => setMessage(d.message))
      .catch(() => setMessage('Could not reach backend'))
  }, [])

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      <h1>React Frontend</h1>
      <p>{message}</p>
    </div>
  )
}
