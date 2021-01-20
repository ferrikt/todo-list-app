const TotalTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Total Todos</h5>
      <strong>{count}</strong> item{suffix}
    </div>
  )
}

const CompletedTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's'

  return (
    <div className="todo-count">
      <h5>Completed Todos</h5>
      <strong>{count}</strong> item{suffix} completed
    </div>
  )
}

const Footer = ({
  todos,
  sortByName,
  nameSort,
  sortByPriority,
  prioritySort,
}) => {
  const completed = todos.filter((todo) => todo.completed === true)
  return (
    <footer className="footer">
      <div className="actions">
        <h5>Sort</h5>
        <button className="button" onClick={sortByName}>
          Sort tasks by name ({nameSort})
        </button>
        <button className="button" onClick={sortByPriority}>
          Sort tasks by priority ({prioritySort})
        </button>
      </div>

      <TotalTodos count={todos.length} />
      <CompletedTodos count={completed.length} />
    </footer>
  )
}

export default Footer
