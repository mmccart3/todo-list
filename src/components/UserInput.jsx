import { useState } from "react"

function UserInput({ handleNewTodo }) {
  const [input, setInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    handleNewTodo(input)
    setInput("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input className="text" name="added" type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button type="submit">add</button>
    </form>
  )
}

export default UserInput