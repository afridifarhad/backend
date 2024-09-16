import  express from 'express'

const app = express()
const PORT = 3000



app.get("/", (req, res) => {
    res.send("Welcome to the HOME page")
})

// About page 

app.get("/about", (req, res) => {
    res.send("This is the ABOUT page")

})

// Contact Page
app.get("/contact", (req, res) => {
    res.send("This is the CONTACT page")
})
