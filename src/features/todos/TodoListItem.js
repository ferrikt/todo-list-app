import React from 'react'
import { ReactComponent as TimesSolid } from './times-solid.svg'

import {
  availablePriorities,
  capitalize,
  priorityColorMatching,
} from '../data/priorities'

const TodoListItem = ({
  todo,
  deleteTodo,
  todoToggled,
  todoPrioritySelected,
}) => {
  const { text, completed, priority } = todo

  const handleCompletedChanged = () => {
    todoToggled(todo.id)
  }

  const handlePriorityChanged = (e) => {
    const priority = e.target.value
    todoPrioritySelected(todo.id, priority)
  }

  const onDelete = () => {
    deleteTodo(todo.id)
  }

  const priorityOptions = availablePriorities.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="priorityPicker"
            value={priority}
            style={{ color: priorityColorMatching[priority] }}
            onChange={handlePriorityChanged}
          >
            {priorityOptions}
          </select>

          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
