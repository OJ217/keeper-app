import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){

    const [notes, setNotes] = useState([]);

    function addNewNote(newNote){
        setNotes((prevNotes)=>{
            return [
                ...prevNotes,
                newNote
            ];
        });
    } 

    function deleteNote(index){
        setNotes(notes.filter((note)=>{
            return notes.indexOf(note) !== index;
        }));
    }

    return (
        <div>
            <Header />
            <CreateArea addNewNote={addNewNote} />
            {notes.map((note, index)=>{
                return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
            })}
            <Footer />
        </div>
    );
};

export default App;