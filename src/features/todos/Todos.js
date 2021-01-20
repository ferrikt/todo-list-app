import React, { useState, useEffect } from 'react'
import AddTodo from '../addTodo/AddTodo'
import Footer from '../footer/Footer'
import TodoList from './TodoList'

const Todos = ({ data }) => {
  const [todos, setTodos] = useState(data)
  const [nameSort, setNameSort] = useState('asc')
  const [prioritySort, setPrioritySort] = useState('asc')

  const addTodo = (todo) =>
    setTodos((todos) => [...todos, { ...todo, id: todos.length }])

  const deleteTodo = (id) =>
    setTodos((todos) => todos.filter((item) => item.id != id))

  const todoToggled = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.completed = !todo.completed
    setTodos(newTodos)
  }

  const todoPrioritySelected = (id, priority) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.priority = priority
    setTodos(newTodos)
  }

  const sortByName = () => {
    let sorted = []
    if (nameSort === 'asc') {
      sorted = todos.sort((a, b) => a.text.localeCompare(b.text))
      setNameSort('desc')
    } else {
      sorted = todos.sort((a, b) => b.text.localeCompare(a.text))
      setNameSort('asc')
    }

    const newTodos = [...sorted]

    setTodos((todos) => newTodos)
  }

  const sortByPriority = () => {
    let sorted = []
    if (prioritySort === 'asc') {
      sorted = todos.sort((a, b) =>
        a.priority.localeCompare(b.priority),
      )
      setPrioritySort('desc')
    } else {
      sorted = todos.sort((a, b) =>
        b.priority.localeCompare(a.priority),
      )
      setPrioritySort('asc')
    }

    const newTodos = [...sorted]
    setTodos((todos) => newTodos)
  }

  return (
    <div className="todoapp">
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        todoToggled={todoToggled}
        todoPrioritySelected={todoPrioritySelected}
      />
      <Footer
        todos={todos}
        sortByName={sortByName}
        nameSort={nameSort}
        sortByPriority={sortByPriority}
        prioritySort={prioritySort}
      />
    </div>
  )
}

export default Todos
