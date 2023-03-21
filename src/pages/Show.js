import React,{ useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import '../index.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Show(props) {
  const { id } = useParams()
  const journal = props.journal.find((journal) => journal._id === id)
  let navigate = useNavigate()
  


  // state for form
  const [editForm, setEditForm] = useState({
    note: "",
    picture: "",
    date: ""
    
  })

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  // handlesubmit for form
  const handleSubmit = (event) => {
    event.preventDefault()
    props.updateJournal(editForm, journal._id)
    // redirect journal back to index
    navigate("/")
  }
  const removeJournal = () => {
    props.deleteJournal(journal._id);
    // redirect journal back to index
    navigate("/")
  };
  return (
    <div className="journal">
    <h1>{journal.date}</h1>
    <h2>{journal.note}</h2>
    <img src={journal.picture} alt={journal.picture}/>
    <div id="form">
    <form onSubmit={handleSubmit}>
    <TextField
        type="text"
        value={editForm.date}
        name="date"
        placeholder="date"
        onChange={handleChange}
      />
     <TextField
        type="text"
        value={editForm.picture}
        name="picture"
        placeholder="picture URL"
        onChange={handleChange}
      />
     <TextField
        type="text"
        value={editForm.note}
        name="note"
        placeholder="note"
        onChange={handleChange}
      />
       
       <TextField id="update" type="submit" value="Update Journal" />

      <Button variant="contained" id="delete" onClick={removeJournal}>
      DELETE
      </Button>
    </form>
    </div>

  </div>
);
}

export default Show;