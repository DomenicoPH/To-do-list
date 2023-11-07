import React from 'react'
import { FaTrash } from 'react-icons/fa'

export const TodoItem = () => {
  return (
    <li>
        <span>
            <label htmlFor="" className='container-done'></label>
        </span>
        <button className='btn-delete'><FaTrash /></button> 
    </li>
  )
}
