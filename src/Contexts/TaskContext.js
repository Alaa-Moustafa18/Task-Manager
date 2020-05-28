import React, { createContext,  useReducer, useEffect } from 'react';
import { taskReducer } from '../Reducers/TaskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {   
        
    
    const [state, dispatch] = useReducer(taskReducer,[], () =>  {
        const initialState = localStorage.getItem("tasks"); 
        return {
            currentTask : null,
            tasks: initialState ? JSON.parse(initialState) : []
        }
    })    
    useEffect(() => {    
        localStorage.setItem("tasks", JSON.stringify(state.tasks))       
    },
    [state.tasks])
    return ( 
        <TaskContext.Provider value={{state, dispatch}}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskContextProvider;