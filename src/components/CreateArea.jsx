import React, {useState} from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom"; 

function CreateArea(props){

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

    const [expanded, setExpanded] = useState(false);

    function handleChange(event){

        const {name, value} = event.target;

        setNewNote((prevNote)=>{
            return {
                ...prevNote,
                [name]: value
            }
        });
    }

    function handleClick(event) {
        props.addNewNote(newNote);
        event.preventDefault();
        setNewNote({
            title: "",
            content: ""
        });
    }

    function expand(){
        setExpanded(true)
    }

    return (
        <div>
            <form className="create-note">
                {expanded ? <input onChange={handleChange} name="title" type="text" placeholder = "Title" value = {newNote.title} autoComplete="off" autoCorrect="off" spellCheck="off"/> : null}
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder ="Take a note..." rows={expanded ? "3" : "1"} value={newNote.content} autoComplete="off" autoCorrect="off" spellCheck="off"></textarea>
                <Zoom in={true}>
                    <Fab onClick={handleClick}><Add /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;