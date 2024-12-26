import { useImmerReducer } from "use-immer";
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import { NoteContext } from "./NoteContext.jsx";
import { NoteDispatchContext } from "./NoteContext.jsx";

let id = 0;
const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

// Note Reducer
function notesReducer(notes, action){
    if(action.type === "ADD_NOTE"){ 
        notes.push({
            id : id++, 
            text : action.text,
            done : false
        });
    } else if (action.type === "CHANGE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id);
        notes[index].text = action.text;
        notes[index].done = action.done;
    } else if (action.type === "DELETE_NOTE"){
        const index = notes.findIndex(note => note.id === action.id);
        notes.splice(index, 1);
    }
}


// Without Reducer 

// export default function NoteApp() {
//   const [notes, setNotes] = useImmer(initialNotes);

//   function handleAddNote(text) {
//     setNotes((draft) => {
//       draft.push({
//         id: id++,
//         text: text,
//         done: false,
//       });
//     });
//   }

//   function handleChangeNotes(note) {
//     setNotes((draft) => {
//       const index = draft.findIndex((item) => item.id === note.id);
//       draft[index] = note;
//     });
//   }

//   function handleDeleteNotes(note) {
//     setNotes((draft) => {
//       const index = draft.findIndex((item) => item.id === note.id);
//       draft.splice(index, 1);
//     });
//   }

//   return (
//     <div>
//       <h1>Note App</h1>
//       <NoteForm onAddNote={handleAddNote} />
//       <NoteList
//         notes={notes}
//         onChange={handleChangeNotes}
//         onDelete={handleDeleteNotes}
//       />
//     </div>

// With Reducer

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer,initialNotes)
  
    // function handleAddNote(text) {
    //     dispatch({
    //         type : "ADD_NOTE",
    //         text : text
    //     })
    // }
  
    // function handleChangeNotes(note) {
    //     dispatch({
    //         type : "CHANGE_NOTE",
    //         id : note.id,
    //         text : note.text,
    //         done : note.done
    //     })
    // }
  
    // function handleDeleteNotes(note) {
    //     dispatch({
    //         type : "DELETE_NOTE",
    //         id : note.id
    //     })
    // }
  
    return (
      <div>
        <NoteContext.Provider value={notes}>
        <NoteDispatchContext.Provider value = {dispatch}>
        <h1>Note App</h1>
        <NoteForm/>
        <NoteList/>
        </NoteDispatchContext.Provider>
        </NoteContext.Provider>
      </div>
    )}
