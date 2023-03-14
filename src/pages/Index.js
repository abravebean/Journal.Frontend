import React,{ useState} from "react"
import { Link } from 'react-router-dom'
import '../index.css';
// import { useSelector } from 'react-redux';


function Index(props) {
  const [newForm, setNewForm] = useState({
    note: "",
    picture: "",
    date: "",
  })
  // const post = useSelector((state) => (props ? state.posts.posts.find((journal) => journal._id === props) : null));
  // // const dispatch = useDispatch();
  // useEffect(() => {
  //   // if (!post?.name)
  //   // if (post) handleChange(post);
  // }, [post]);


  const loaded = () => {
    return props.journal.map((journal) => (
      <div key={journal._id} className="journal">
       <Link to={`/journal/${journal._id}`}>
          <a >{journal.date}</a>
        </Link>

        <img src={journal.picture} alt={journal.picture} className="image" />
        <h3 >{journal.note}</h3>
      </div>
    ))
  }
    // handleChange 
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.note]: event.target.value,
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
       <h3 id="logo">Create a log</h3>
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