import React, { useContext }  from 'react'
import { TaskContext } from '../Contexts/TaskContext'

export const TaskDetails = ({task}) => {
    const { dispatch } = useContext(TaskContext);    
       
    return(
        <li className="list-item">
            <span>{task.title} </span> 
            <div>               
                <button className="btn-edit task-btn"   onClick={ () => dispatch({type:'SET_CURRENT_TASK', payload: task.id}) }><i className="fas fa-pen"></i></button>
                <button className="btn-delete task-btn" onClick={()  => dispatch({type:'REMOVE_TASK', payload:task.id }) }><i className="fas fa-trash-alt"></i></button>
            </div>
        </li>
    )
}