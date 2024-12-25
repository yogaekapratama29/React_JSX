import Note from "./Note";
export default function NoteList({ notes, onChange, onDelete }) {
    if (!Array.isArray(notes)) {
      return <div>Data Notes Tidak Valid</div>;
    }
  
    return (
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note
              note={note}
              onChange={onChange}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    );
  }
  