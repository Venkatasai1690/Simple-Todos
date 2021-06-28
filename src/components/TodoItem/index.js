// Write your code here

import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <h1 className="todo-title">{title}</h1>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
