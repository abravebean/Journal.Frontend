

import React,{ useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Index from "../pages/Index.js"
import Show from "../pages/Show"

function Main(props) {
  const [journal, setJournal] = useState([])
  const URL = "http://localhost:3000/journal/"

  const getJournal = async () => {
    const response = await fetch(URL)
    const data = await response.json()
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
