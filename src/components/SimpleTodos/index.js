import {Component} from 'react'

import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {todoDetailsList: initialTodosList}

  deleteTodo = id => {
    const {todoDetailsList} = this.state
    const filteredTodosDetails = todoDetailsList.filter(
      eachTodo => eachTodo.id !== id,
    )

    this.setState({todoDetailsList: filteredTodosDetails})
  }

  render() {
    const {todoDetailsList} = this.state
    return (
      <div className="simple-todos-app-container">
        <div className="simple-todos-container">
          <div className="todos-container">
            <h1 className="heading">Simple Todos</h1>
            <ul className="todos-list">
              {todoDetailsList.map(eachTodo => (
                <TodoItem
                  key={eachTodo.id}
                  todoDetails={eachTodo}
                  deleteTodo={this.deleteTodo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
