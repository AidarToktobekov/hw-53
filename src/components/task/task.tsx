interface Props{
    task: string;
    id: string;
}

const TaskList:React.FC<Props> = (Props)=>{

    
    return(
        <div>
            {Props.task}
            <button>Delete</button>
        </div>
    )
}

export default TaskList