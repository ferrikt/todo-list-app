import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({
  todos,
  deleteTodo,
  todoToggled,
  todoPrioritySelected,
}) => {
  const renderedListItems = todos.map((item) => {
    return (
      <TodoListItem
        key={item.id}
        todo={item}
        deleteTodo={deleteTodo}
        todoToggled={todoToggled}
        todoPrioritySelected={todoPrioritySelected}
      />
    )
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
