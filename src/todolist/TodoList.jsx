import Todo from "./Todo.jsx";

export default function TodoList(){
    // Menggunakan perulangan array dengan kode JS karena JSX not support
    const data = [
        {
            id : 0,
            text : "Learn HTML",
            isCompleted : true
        },
        {
            id : 1,
            text : "Learn CSS",
            isCompleted : true
        },
        {
            id : 2,
            text : "Learn Javascript",
            isCompleted : true
        },
        {
            id : 3,
            text : "Learn React JS",
            isCompleted : false
        },
    ]

 
    return(
    <ul>
        {data.map((todo)=> (<Todo key={todo.id} {...todo}/>))}
        {/* <Todo isCompleted = {true} text = "Learn HTML" isDeleted = {true}/>
        <Todo isCompleted = {true} text = "Learn CSS"/>
        <Todo isCompleted = {true} text = "Learn Javascript"/>
        <Todo isCompleted = {false} text = "Learn React JS"/> */}
    </ul>
    )
}