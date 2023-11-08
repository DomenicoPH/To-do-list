import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { useForm } from '../hooks/useForm'
import { useState, useRef } from "react"

export const TodoUpdate = ({todo, handleUpdateTodo}) => {

    const { updateDescription, onInputChange } = useForm({
      updateDescription: todo.description
    });

    const [disabled, setDisabled] = useState(true)
    const focusInputRef = useRef()

    const onSubmitUpdate = e => {
      e.preventDefault()
      const id = todo.id
      const description = updateDescription
      handleUpdateTodo(id, description)
      setDisabled(!disabled)
      focusInputRef.current.focus()
    }

    return ( 
  
        <form onSubmit={onSubmitUpdate}>
      
          <input 
            type="text"
            className={`input-update ${todo.done ? 'text-decoration-dashed' : ''}`}
            name='updateDescription'
            value={updateDescription}
            onChange={onInputChange}
            placeholder='¿Qué hay que hacer?'
            readOnly={disabled}
            ref={focusInputRef}
          />
      
          <button className='btn-edit' type='submit'>
            <FaEdit/>
          </button>
      
        </form>
        
        )
}
