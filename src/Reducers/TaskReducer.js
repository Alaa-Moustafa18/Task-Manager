import {v1 as uuid} from "uuid";

export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":        
        const newTask = {
            id:uuid(),
            title: action.payload
        }    
        const addedTask = [...state.tasks, newTask]
        return {
            ...state,
            tasks:  addedTask
        } 
        case "REMOVE_TASK": 
            const removedTask = state.tasks.filter(task => task.id !== action.payload ) 
            return {
                ...state,
                tasks: removedTask
            }
        case "SET_CURRENT_TASK":
            return {
                ...state, 
                currentTask: action.payload
        }  
        case "UPDATE_TASK":           
            const updatedNote =  {       
                id:    state.currentTask,       
                title: action.payload
            }           
            const updatedNotes = state.tasks.map(task => {
                if(task.id === state.currentTask){
                    return updatedNote
                }else{
                    return task
                }
            })  
              return {
                currentTask: null,
                tasks: updatedNotes
              };
            
        case "CLEAR":            
            return {
                currentTask:null,
                tasks:[]
            }

        default:
            return state
    }
}