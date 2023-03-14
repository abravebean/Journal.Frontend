import React,{ useState} from "react"
import { Link } from 'react-router-dom'
// import { useParams, useNavigate } from "react-router-dom"
import '../index.css';
// import { useSelector } from 'react-redux';


function Index(props) {
  // const { id } = useParams()
  // const journal = props.journal.find((journal) => journal._id === id)
  // let navigate = useNavigate()
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
      <div id="card" key={journal._id} className="journal">
       <Link to={`/journal/${journal._id}`}>
          <h3 >{journal.date}</h3>
        </Link>


        <Link to={`/journal/${journal._id}`}>
        <img src={journal.picture} alt={journal.picture} className="image" />
        </Link>
        <h1 >{journal.note}</h1>
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
      note: "",
     
      picture: "",
      date: "",
    })
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return (
    <div>
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
    </div>
  )
}

export default Index