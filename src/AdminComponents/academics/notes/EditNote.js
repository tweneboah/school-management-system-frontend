import React, {useState, useEffect} from 'react'
import EditForm from './NoteForm';
import axios from '../../../store/axios';
import {useParams} from 'react-router-dom';
import {errorAlert, successAlert} from '../../../utils'

function EditNote() {
    const [classID, setclassID] = useState("");
    const [subject, setsubject] = useState("");
    const [topic, settopic] = useState("")
    const [notes, setnotes] = useState("")
    const [file, setfile] = useState("")
    const [loading, setloading] = useState(false);
    const {id} = useParams();

    const handleResetNote = () => {
        setclassID("");
        setsubject("");
        settopic("")
        setnotes("");
        setfile("");
   }
   useEffect(() => {
       axios.get(`/notes/${id}`).then(res => {
           let data =res.data.doc
           setclassID(data?.classID);
           setsubject(data?.courseID);
           settopic(data?.topic);
           setfile(data?.file);
           setnotes(data?.notes)
       })
   }, [id])


   const handleEditNote = () => {
    setloading(true)
    const fileData = new FormData();
        fileData.append("photo", file);
        axios.post('/upload', fileData, {}).then((res) => {
          const path= res.data.path;
          console.log(path) 
          axios.put(`/notes/update/${id}`, {
              topic,
              classID,
              courseID: subject,
              notes,
              file: path
          }).then(response => {
            console.log(response.data)
              if(response.data.error){
                errorAlert(res.data.error);
                setloading(false);
                return 0;
              }
              successAlert("notes successfully added");
              setloading(false);
              handleResetNote();  
          })
        })
    .catch(err => {
        setloading(false);
        errorAlert("sorry something went error, try again later")
    })

   }

    return (
        <div className="content__container mb-5">
           <h3>Add New Notes</h3>
           <EditForm 
            classID={classID}
            setclass={setclassID} 
            subject={subject} 
            setsubject={setsubject} 
            topic={topic} 
            settopic={settopic} 
            file={file} 
            handleAdd= {handleEditNote}
            handleReset ={handleResetNote}
            loading={loading}
            isEdit={true}
            setfile={setfile} 
            notes={notes}
            setnotes={setnotes}
           />
        </div>
    )
}

export default EditNote
