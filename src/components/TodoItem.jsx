import React from 'react'
import { TodoUpdate } from './TodoUpdate'
import { FaTrash } from 'react-icons/fa'

export const TodoItem = ({ todo, handleUpdateTodo, handleDeleteTodo, handleCompleteTodo }) => {
  return (
    <li>
        <span onClick={() => handleCompleteTodo(todo.id)}>
            <label htmlFor="" className='container-done'></label>
        </span>
        <TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo}/>
        <button 
          className='btn-delete'
          onClick={() => handleDeleteTodo(todo.id)}
          >
            <FaTrash />
        </button> 
    </li>
  )
}
