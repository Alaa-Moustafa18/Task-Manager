import React, { useContext, useState, useEffect, useRef } from 'react';
import { TaskContext } from '../Contexts/TaskContext';

const TaskForm = ({task}) => {
    let ref= useRef()
    const { state, dispatch } = useContext(TaskContext)   
    const [title, setTitle] = useState('')   
    const clear = () => {       
        dispatch({type:'CLEAR'})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === ""){
            alert ("can't add a blank note")
        }else{
            if(state.currentTask === null){
                dispatch({type:"ADD_TASK", payload: title})
            }else{                
                dispatch({type:"UPDATE_TASK", payload:title})             
            }       
            setTitle('');
        }
    }
    useEffect(()=>{        
        ref.current.focus()
        if(state.currentTask !== null){             
            let selectedTask =    state.tasks.find(task =>  task.id === state.currentTask)  
            setTitle(selectedTask.title)
        }       
    },[state.currentTask] )
   
    return ( 
        <form onSubmit={handleSubmit} className="form">
            <input value={title} ref={ref} onChange={(e) => setTitle(e.target.value)} placeholder="add title..."  className="task-input"/>
            <div className="buttons">
                 <button type="submit" className="btn add-task-btn"> { state.currentTask === null ? "Add Task" : "Update Task"}</button>                  
                
                <button type="button" className="btn clear-btn" onClick={clear} disabled= { state.tasks.length ?  false :  true}  >
                    Clear
                </button>
            </div>
        </form>
     );
}
 
export default TaskForm;