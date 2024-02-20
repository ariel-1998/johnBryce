import { NoteModel } from "../../../models/NoteModel";
import "./Note.css";

interface NoteProps {
    note: NoteModel
}

function Note({ note }: NoteProps): JSX.Element {
    return (
        <div className="Note">
			<h4>{note.title}</h4>
            <p>{note.task}</p>
            <span>{note.date.toString().split('T')[0]}</span>
        </div>
    );
}

export default Note;
