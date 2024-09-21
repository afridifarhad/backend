import express from "express"

const app = express()
const PORT = 3000

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





app.listen(PORT, () => {
    console.log(`Server is listening here http://localhost:${PORT}`)

})


