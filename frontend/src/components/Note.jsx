import {React,useState} from "react";
import "../styles/Note.css"

function Note({ note, onDelete,onUpdate }) {

    const [updateNoteTitle,setUpdateNoteTitle] = useState(note.title);
    const [updateNoteContent,setUpdateNoteContent] = useState(note.content);

    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <label>Title:</label>
            <br/>
            <input 
                type="text"
                name="title"
                value={updateNoteTitle}
                required
                onChange={(e) => setUpdateNoteTitle(e.target.value)} 
            />
            <br/>
            <input
                tye="text"
                name="content"
                value={updateNoteContent}
                required
                onChange={(e) =>setUpdateNoteContent(e.target.value) }
            />
            <p className="note-date">{formattedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>

            <button className="update-button" onClick={() => onUpdate(note.id,updateNoteTitle,updateNoteContent)}>
                Update
            </button>
  
        </div>
    );
}

export default Note
