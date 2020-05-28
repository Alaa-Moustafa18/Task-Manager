import React, { useContext } from 'react';
import { TaskContext } from '../Contexts/TaskContext';
import { TaskDetails } from './TaskDetails';

const TaskList = () => {
    const { state } = useContext(TaskContext)   
    return ( 
        <div className="task-list">
            {
                state.tasks.length? (
                <ul className="list">           
                    { 
                        state.tasks.map( task => {
                            return (
                                <TaskDetails key={task.id} task={task}/>                      
                            )
                        })
                    }
                </ul>
                ):(
                    <div className="no-tasks">No Tasks</div>
                )
            }
        </div>
     );
}
 
export default TaskList;