import { render, screen } from '@testing-library/react'
import App from './App'
import Todos from './features/todos/Todos'
import Footer from './features/footer/Footer'

test('renders a todo app container', () => {
  const { container } = render(<Todos data={[]} />)
  expect(container.firstChild).toHaveClass('todoapp')
})

test('renders a footer', () => {
  const { container } = render(<Footer todos={[]} />)
  expect(container.firstChild).toHaveClass('footer')
})

test('renders a To-do list header', () => {
  const { container, getByText } = render(<App />)
  expect(getByText('To-do list application')).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="App"
    >
      <main>
        <section
          class="medium-container"
        >
          <h2>
            To-do list application
          </h2>
          <div
            class="todoapp"
          >
            <header
              class="header"
            >
              <input
                class="new-todo"
                placeholder="What needs to be done?"
                value=""
              />
            </header>
            <ul
              class="todo-list"
            >
              <li>
                <div
                  class="view"
                >
                  <div
                    class="segment label"
                  >
                    <input
                      class="toggle"
                      type="checkbox"
                    />
                    <div
                      class="todo-text"
                    >
                      Clean house
                    </div>
                  </div>
                  <div
                    class="segment buttons"
                  >
                    <select
                      class="priorityPicker"
                      style="color: green;"
                    >
                      <option
                        value="low"
                      >
                        Low
                      </option>
                      <option
                        value="normal"
                      >
                        Normal
                      </option>
                      <option
                        value="high"
                      >
                        High
                      </option>
                      <option
                        value="critical"
                      >
                        Critical
                      </option>
                    </select>
                    <button
                      class="destroy"
                    >
                      <svg>
                        times-solid.svg
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="view"
                >
                  <div
                    class="segment label"
                  >
                    <input
                      class="toggle"
                      type="checkbox"
                    />
                    <div
                      class="todo-text"
                    >
                      Buy toys
                    </div>
                  </div>
                  <div
                    class="segment buttons"
                  >
                    <select
                      class="priorityPicker"
                      style="color: green;"
                    >
                      <option
                        value="low"
                      >
                        Low
                      </option>
                      <option
                        value="normal"
                      >
                        Normal
                      </option>
                      <option
                        value="high"
                      >
                        High
                      </option>
                      <option
                        value="critical"
                      >
                        Critical
                      </option>
                    </select>
                    <button
                      class="destroy"
                    >
                      <svg>
                        times-solid.svg
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="view"
                >
                  <div
                    class="segment label"
                  >
                    <input
                      class="toggle"
                      type="checkbox"
                    />
                    <div
                      class="todo-text"
                    >
                      Clean yard
                    </div>
                  </div>
                  <div
                    class="segment buttons"
                  >
                    <select
                      class="priorityPicker"
                      style="color: green;"
                    >
                      <option
                        value="low"
                      >
                        Low
                      </option>
                      <option
                        value="normal"
                      >
                        Normal
                      </option>
                      <option
                        value="high"
                      >
                        High
                      </option>
                      <option
                        value="critical"
                      >
                        Critical
                      </option>
                    </select>
                    <button
                      class="destroy"
                    >
                      <svg>
                        times-solid.svg
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="view"
                >
                  <div
                    class="segment label"
                  >
                    <input
                      class="toggle"
                      type="checkbox"
                    />
                    <div
                      class="todo-text"
                    >
                      Read newspaper
                    </div>
                  </div>
                  <div
                    class="segment buttons"
                  >
                    <select
                      class="priorityPicker"
                      style="color: green;"
                    >
                      <option
                        value="low"
                      >
                        Low
                      </option>
                      <option
                        value="normal"
                      >
                        Normal
                      </option>
                      <option
                        value="high"
                      >
                        High
                      </option>
                      <option
                        value="critical"
                      >
                        Critical
                      </option>
                    </select>
                    <button
                      class="destroy"
                    >
                      <svg>
                        times-solid.svg
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="view"
                >
                  <div
                    class="segment label"
                  >
                    <input
                      class="toggle"
                      type="checkbox"
                    />
                    <div
                      class="todo-text"
                    >
                      Clean car
                    </div>
                  </div>
                  <div
                    class="segment buttons"
                  >
                    <select
                      class="priorityPicker"
                      style="color: green;"
                    >
                      <option
                        value="low"
                      >
                        Low
                      </option>
                      <option
                        value="normal"
                      >
                        Normal
                      </option>
                      <option
                        value="high"
                      >
                        High
                      </option>
                      <option
                        value="critical"
                      >
                        Critical
                      </option>
                    </select>
                    <button
                      class="destroy"
                    >
                      <svg>
                        times-solid.svg
                      </svg>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <footer
              class="footer"
            >
              <div
                class="actions"
              >
                <h5>
                  Sort
                </h5>
                <button
                  class="button"
                >
                  Sort tasks by name (
                  asc
                  )
                </button>
                <button
                  class="button"
                >
                  Sort tasks by priority (
                  asc
                  )
                </button>
              </div>
              <div
                class="todo-count"
              >
                <h5>
                  Total Todos
                </h5>
                <strong>
                  5
                </strong>
                 item
                s
              </div>
              <div
                class="todo-count"
              >
                <h5>
                  Completed Todos
                </h5>
                <strong>
                  0
                </strong>
                 item
                s
                 completed
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  `)
})
