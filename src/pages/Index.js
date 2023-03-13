import React,{ useState } from "react"
import { Link } from 'react-router-dom'
import '../index.css';
function Index(props) {
  const [newForm, setNewForm] = useState({
    note: "",
    picture: "",
    date: ""
  })

  const loaded = () => {
    return props.journal.map((journal) => (
      <div key={journal._id} className="journal">
       <Link to={`/journal/${journal._id}`}>
          <h1>{journal.date}</h1>
        </Link>

        <img src={journal.picture} alt={journal.picture} className="image"/>
        <h3>{journal.note}</h3>
      </div>
    ))
  }
  
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.date]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createJournal(newForm)
    setNewForm({
      date: "",
      picture: "",
      note: "",
    })
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.date}
          name="date"
          placeholder="date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.picture}
          name="picture"
          placeholder="picture"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.note}
          name="note"
          placeholder="note"
          onChange={handleChange}
        />
        <input type="submit" value="Create Journal" />
      </form>
      {props.journal ? loaded() : loading()}
    </section>
  )
}

export default Index