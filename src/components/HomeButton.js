import { useHistory } from "react-router-dom"
import React from "react"
import Map from "./map"
import Local from "./local"

const HomeButton = () => {
  let history = useHistory()
  console.log(history, "history")
  function handleClick() {
    const pathname = history.location.pathname
    const length = history.length
    console.log(pathname, length)
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go home
      </button>
      <Map />
      <Local />
    </div>
  )
}

export default HomeButton
