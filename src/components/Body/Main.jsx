import {useState} from "react"
export default function Main(){

    const [todo, setTodo] = useState('');
    const [task, setTask] = useState([]);

    function handleChange(event){
        const newTask = event.target.value
        // console.log(task);
        setTodo(newTask)
        
        // console.log(todo)
    }

    //function to add data to the initial state variable upon click of a button

    function addTask(){
        setTask((prev)=>[...prev, todo])
    }
    console.log(task)

    //maping through the array in the state variable

    const lists = task.map((list)=>{
        return (
           <>
            <ul>
                <li>
                    {list} <span></span>
                </li>
            </ul>
           </>
        )
    })

    return(
        <>
            <div className="to-do">
                <label htmlFor="task">Task to do</label>
                <input onChange={handleChange} id="task" name="task" type="text" placeholder="please add task here" />
                <button  onClick={addTask} type="submit" ><span>➕</span>Add</button>
            </div>

            <div className="to-do-list">
                {lists}
            </div>
        </>
    )
}