import { useState } from "react";
import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default function Task() {
    
    // Without Sharing State

    // const [item, setItem] = useState("");
    // const [items, setItems] = useImmer([]);

    // function handleChange(e) {
    //     setItem(e.target.value);
    // }

    // function handleClick(e) {
    //     e.preventDefault();
    //     setItems((draft) => {
    //         draft.push(item);
    //     });
    //     setItem("");
    // }

    // return (
    //     <div>
    //         <h1>Create Task</h1>
    //         <form>
    //             <input value={item} onChange={handleChange} />
    //             <button onClick={handleClick}>Add</button>
    //         </form>
    //         <h1>List Tasks</h1>
    //         <ul>
    //             {items.map((task, index) => (
    //                 <li key={index}>{task}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    // With Sharing State (items is sharing state)
    const [items,setItems] = useImmer([]);

    function handleSubmit(item){
        setItems(draft => {
            draft.push(item);
        } )
    }

    return(
        <div>
            <TaskForm onSubmit={handleSubmit}/>
            <TaskList items={items}/>
        </div>
    )
}
