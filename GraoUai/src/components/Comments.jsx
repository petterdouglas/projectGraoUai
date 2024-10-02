// hooks e dependências
import { useState, useEffect } from "react"

// components
import Comment1 from "./Comment1"
import Comment2 from "./Comment2"

const Comments = () => {

  const [change, setChange] = useState(true)
  const [interrupted, setInterrupted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setChange(prevIsActive => !prevIsActive)
        setIsVisible(true)
      }, 250)
    }, 10000)

    return () => clearInterval(interval)

  }, [interrupted])

  return (
    <div id="comments">
      <div className={`fade-transition ${isVisible ? "visible" : "hidden"}`}>
        {change ? <Comment1 setChange={setChange} setInterrupted={setInterrupted} /> : <Comment2 setChange={setChange} setInterrupted={setInterrupted} />}
      </div>
    </div>
  )
}

export default Comments