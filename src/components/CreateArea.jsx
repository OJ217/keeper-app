import React, {useState} from "react";

function CreateArea(props){

    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });

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

    return (
        <div>
            <form>
                <input onChange={handleChange} name="title" type="text" placeholder = "Title" value = {newNote.title}/>
                <textarea onChange={handleChange} name="content" placeholder ="Take a note..." rows="3" value={newNote.content}></textarea>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;