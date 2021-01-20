import React, { useState } from 'react'

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('')

  const handleChange = (e) => setText(e.target.value)

  const handleKeyDown = (e) => {
    const trimmedText = text.trim()
    if (e.which === 13 && trimmedText) {
      addTodo({
        color: '',
        completed: false,
        text: trimmedText,
        priority: 'normal',
      })
      setText('')
    }
  }

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default AddTodo
