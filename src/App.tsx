import './App.css'

const App =()=> {

  return (
    <> 
    <h1 className='title'>ToDo List</h1>
      <form action=''>
        <div className="form-main">
          <input type="text" className='input-task' placeholder='Add new task'/>
          <button type='button' className='button'>Add</button>
        </div>
      </form>
    </>
  )
}

export default App
