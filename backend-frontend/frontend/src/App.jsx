import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './app.css'

const API_URL = 'http://localhost:3000/api/users'



function App() {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState('')
  const [updateUser, setUpdateUser] = useState({id: '', name: ''})

  async function fetchUsers() {
    const response = await axios.get (API_URL)
    const content = response.data
    console.log(content)
    //setUsers(content.data)
    
  }

  useEffect(() =>{
    fetchUsers()

  }, [])

  // add a user

  const addUser = () => {
    axios.post(API_URL, {name: newUser})
    .then(response => {
      setUsers([...users, response.data])
      setNewUser('')
      fetchUsers()

    }).catch(err => console.err(err))

  }


  return (
    <>
          <h1>CRUD Operations with Express & React</h1>
      <input
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        placeholder="Enter new user"
      />
      <button onClick={addUser}>add user</button>

    
    
    </>
  )
}

export default App