import Todo from "./Todo.jsx";

export default function TodoList(){
    // Menggunakan perulangan array dengan kode JS karena JSX not support
    const data = [
        {
            text : "Learn HTML",
            isCompleted : true
        },
        {
            text : "Learn CSS",
            isCompleted : true
        },
        {
            text : "Learn Javascript",
            isCompleted : true
        },
        {
            text : "Learn React JS",
            isCompleted : false
        },
    ]

    const todos = data.map((todo) => {
       return <Todo {...todo}/>
    })
    return(
    <ul>
        {todos}
        {/* <Todo isCompleted = {true} text = "Learn HTML" isDeleted = {true}/>
        <Todo isCompleted = {true} text = "Learn CSS"/>
        <Todo isCompleted = {true} text = "Learn Javascript"/>
        <Todo isCompleted = {false} text = "Learn React JS"/> */}
    </ul>
    )
}