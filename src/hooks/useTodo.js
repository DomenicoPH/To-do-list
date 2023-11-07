import { useReducer } from "react"
import { todoReducer } from "../todoreducer"

export const useTodo = () => {

    const initialState = []
    const [todos, dispatch] = useReducer(
        todoReducer, 
        initialState, 
        init
    )

    const handleNewTodo = todo => {
        const action = {
            type: "Add Todo",
            payload: todo,
        }
        dispatch(action)
    }

    const habdleDelete = id => {
        const action = {
            type: "Delete Todo",
            payload: id,
        };
        dispatch(action);
    }

    const handleCompleteTodo = id => {
        const action = {
            type: "Complete Todo",
            payload: id
        }
        dispatch(action);
    }

    const handleUpdateTodo = (id, description) => {
        const action = {
            type: 'Update Todo',
            payload: {
                id,
                description,
            }
        }
        dispatch(action)
    }
}