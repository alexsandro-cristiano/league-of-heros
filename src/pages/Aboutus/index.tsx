import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Aboutus() {
  const navigate = useNavigate()
  return (
    <>
      <h1>About</h1>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  )
}
