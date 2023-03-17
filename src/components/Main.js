

import React,{ useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index.js"
import Show from "../pages/Show"

import {useSelector }from "react-redux";



function Main(props) {
const posts = useSelector((state)=>state.posts);
console.log(posts)

  const [journal, setJournal] = useState([])
  const URL = "https://diary-app.herokuapp.com/journal"

  const getJournal = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
    setJournal(data)
  }

  const createJournal = async (journal) =>  {
    // POST
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(journal)
    })

    // GET
    getJournal()
  }

  const updateJournal = async(journal, id) => {
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify(journal)
    })
    .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    getJournal()
  }

  const deleteJournal = async(id) => {
    await fetch(URL + id, {
      method: "DELETE"
    })

    getJournal()
  }

  useEffect(() => {
    getJournal()
  }, [])

  return (
    <main>
      <Routes>
        <Route 
          exact
          path="/" 
          element={<Index journal={journal} createJournal={createJournal}/>} />
        <Route 
          path="/journal/:id"
          element={
          <Show 
            journal={journal}
            updateJournal={updateJournal}
            deleteJournal={deleteJournal}
            />
          } />
      </Routes>
    </main>
  )
}

export default Main
