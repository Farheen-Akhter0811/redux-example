import React from "react"
import { useState, useEffect } from "react"

const useStateWithLocalStorage = (localStorageKey) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || ""
  )

  useEffect(() => {
    localStorage.setItem(localStorageKey, value)
  }, [value])

  return [value, setValue]
}

const Local = () => {
  const [value, setValue] = useStateWithLocalStorage("myValueInLocalStorage")

  function storeInLocalstorage(event) {
    // localStorage.setItem("InputValue", event.target.value)
    setValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={value} onChange={storeInLocalstorage}></input>
      {value}
    </div>
  )
}

export default Local
