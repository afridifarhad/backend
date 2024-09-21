import express from "express"

const app = express()
const PORT = 3000

app.use(express.json())


const users = [
    {
        id: 1,
        name: "Farhad Ullah",
        email: "farhad@gmail.com"
    },
    {
        id: 2,
        name: "Afzal Khan",
        email: "afzalkhan@gmail.com"
    }
]

  // fetching the users an array
app.get("/api/users", (req, res) => {
    res.status(200).json(users)

})

// create a new user
app.post("/api/users", (req, res) => {

    const newUser = {
        id: users.length +1,
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser)
    res.status(201).json(newUser)

})





app.listen(PORT, () => {
    console.log(`Server is listening here http://localhost:${PORT}`)

})


