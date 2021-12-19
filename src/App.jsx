import "./App.css"
import { useState } from "react"
import List from "./components/List"
import UserInput from "./components/UserInput.jsx"


function App() {
  const [list, setList] = useState([])

  function handleNewTodo(newItem) {
    setList([...list, { value: newItem, checked: false }])
  }

  function handleChecked(index) {
    let storedList = [...list]
    storedList[index].checked = !storedList[index].checked
    setList(storedList)
  }

  function handleDeleteItem(index) {
    let storedList = [...list]
    storedList.splice(index, 1)
    setList(storedList)
  }

  return (
    <div className="wrapper">
      <h1>To Do List</h1>
      <UserInput handleNewTodo={handleNewTodo} />
      <List items={list} handleDeleteItem={handleDeleteItem} handleChecked={handleChecked} />
    </div>
  )
}

export default App