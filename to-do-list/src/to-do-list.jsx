import react, {useState} from 'react'


function todolist(){
    const [task, settask] = useState(['Eat breakfast', 'Go to school', 'Do homework']);
    const [newtask, setnewtask] = useState('');

    function inputhandler(event){
        setnewtask(event.target.value);
    }

    function addtask(){
        if(newtask.trim() !== ''){
        settask([...task, newtask]);
        setnewtask('');     
    }
    }

    function deletetask(index){
        const updatedtask = task.filter((task, i) => {
            return i !== index;
        })
        settask(updatedtask);
    }

    function moveuptask(index){
        if(index !== 0){
        const updatedtask = [...task];
        [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]]
        settask(updatedtask);
        }
    }

    function movedowntask(index){
        if(index !== task.length - 1){
            const updatedtask = [...task];
            [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]]
            settask(updatedtask);
            }
    }


    return (
        <div className='to-do-list'>
            <h1 >To-Do-list</h1>
            <input type='text' value={newtask} onChange={inputhandler} ></input>
            <button className='addbutton' onClick= {addtask}>Add task</button>
            <ol> 
                {task.map( (task, index) => {
                    return(
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='deletebutton' onClick={() => deletetask(index)}>DELETE</button>
                            <button className='upbutton' onClick={() => moveuptask(index)}>☝️</button>
                            <button className='downbutton'onClick={() => movedowntask(index)}>👇</button>
                        </li>
                    );
                }  )}
            </ol>
        </div>
    );
}

export default todolist;