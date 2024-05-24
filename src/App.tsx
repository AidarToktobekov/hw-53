import { useCallback, useState } from 'react';
import './App.css'
import TaskList from './components/task/task.tsx'

const App =()=> {
  
  const key =()=>{
    return(String(Math.random()))
  };
  
  let taskText:string;
  const taskStorage = [{task: 'do homework', id: key(),},{task:'go to the gym at 4 oclock',id: key(),}]
  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    taskText = event.target.value
  };

  const [showTask, setShowTask] = useState(false)

  const setTask = ()=>{
    if(taskText === '' || taskText === undefined){
      alert('Fill in the input field');
    }
    else{
      setShowTask(!showTask);
      const newTask = {
        task: taskText,
        id: key(),
      }
      taskStorage.push(newTask);
      console.log(taskStorage);
    }
    
  } 

  return (
    <> 
      <h1 className='title'>ToDo List</h1>
      <form action=''>
        <div className="form-main">
          <input type="text" className='input-task' onChange={changeTask} placeholder='Add new task'/>
          <button type='button' className='button' onClick={setTask}>Add</button>
        </div>
      </form> 
      {showTask?(
        <TaskList task={taskStorage[taskStorage.length - 1].task} id=''/>
      ):null}
    </>
  )
}

export default App
