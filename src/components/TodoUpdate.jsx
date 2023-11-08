import React from 'react'
import { FaEdit } from 'react-icons/fa'

export const TodoUpdate = () => {
    return ( 
  
        <form>
      
          <input 
            type="text"
            className='input-update'
            name='description'
            value={todo.description}
            placeholder='¿Qué hay que hacer?'
          />
      
          <button className='btn-edit' type='submit'>
            <FaEdit/>
          </button>
      
        </form>
        
        )
}
