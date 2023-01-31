import React from 'react'
import "../App.css"

function Main({ children }) {
  return (
    <main className="h-full overflow-y-auto scrollbar" id="style-1">
      <div className="container grid px-6 mx-auto" id="force-overflow">{children}</div>
    </main>
  )
}

export default Main
