import React from 'react'
import "../App.css"
import loader from "../loader.svg"


function ThemedSuspense() {
  return (
    <div className="w-full h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900">
      <div className="ring_loader">
        <img src={loader} alt="loader"/>
      </div>
    </div>
  )
}

export default ThemedSuspense
