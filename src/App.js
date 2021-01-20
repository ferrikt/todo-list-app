import Todos from './features/todos/Todos'

const initialTodos = [
  {
    priority: 'normal',
    completed: false,
    text: 'Clean house',
    id: 0,
  },
  { priority: 'normal', completed: false, text: 'Buy toys', id: 1 },
  { priority: 'normal', completed: false, text: 'Clean yard', id: 2 },
  {
    priority: 'normal',
    completed: false,
    text: 'Read newspaper',
    id: 3,
  },
  { priority: 'normal', completed: false, text: 'Clean car', id: 4 },
]

function App() {
  return (
    <div className="App">
      <main>
        <section className="medium-container">
          <h2>To-do list application</h2>
          <Todos data={initialTodos} />
        </section>
      </main>
    </div>
  )
}

export default App
