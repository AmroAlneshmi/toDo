import { useRef, useState } from "react"
import NewTask from "./NewTask"
import Tasks from "./Tasks"


function Container() {
      const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("todos")
        return saved ? JSON.parse(saved) : []
      })
    const inputRef = useRef()
    function handleNewTodo() {
        const text = inputRef.current.value
        const newTodos = [...todos, { id: crypto.randomUUID(), status: 'pending', text }]
        localStorage.setItem("todos", JSON.stringify(newTodos))
        setTodos(newTodos)
        inputRef.current.value = ""
    }
        const handleDelete = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id)
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
    } 
    const handleStatus = (id) => {
      const newTodos = todos.map((todo) => todo.id === id ? {...todo, status: todo.status === 'pending' ? 'done' : 'pending'} : todo)
      setTodos(newTodos)
      localStorage.setItem("todos", JSON.stringify(newTodos))
    }
  return (
    <div className='w-full min-h-screen p-4 sm:p-8 md:p-16 flex justify-center items-start sm:items-center text-center'>
      <div className='bg-blue-900 rounded w-full max-w-lg p-4 sm:p-6 md:p-10'>
        <NewTask inputRef={inputRef} addNew={handleNewTodo}/> 
        {todos.length > 0 ? <Tasks todos={todos} deleteFun={handleDelete} statusFun={handleStatus} /> : <h1 className="text-white">No Tasks Added Yet!!!</h1>}
      </div>
    </div>
  )
}

export default Container