import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ImageDisplay() {
    let location = useLocation();
    let imageCode = location.state;
  return (
    <div>
      <img src={imageCode} alt="Not Found" />
    </div>
  )
}
