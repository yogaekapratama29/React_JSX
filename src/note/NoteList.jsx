import { useContext, useMemo, useRef,useState } from "react";
import Note from "./Note.jsx";
import { NoteContext } from "./NoteContext.jsx";
export default function NoteList() {
  const notes = useContext(NoteContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const filteredNotes = useMemo(() => {
    console.log("Filtered Notes");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  function handleSearch() {
    console.log("Search : ", searchInput.current.value);
    setSearch(searchInput.current.value);
  }
  return (
    <div>
      <input placeholder="Search" ref={searchInput} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <Note note={note} />
          </li>
        ))}
      </ul>
    </div>
  );
}
