import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

const items = [
    {
        id: 1,
        name: "Farhad Ullah",
        age: 25,
        city: "Peshawar"
    },
    {
        id: 2,
        name: "Ali Khan",
        age: 19,
        city: "Islamabad"
    },
    {
        id: 3,
        name: "Musa Alam",
        age: 27,
        city: "Karachi"

    }
]
 
/// Root page
app.get("/", (req, res) => {
    res.send("Welcome to the HOME page")
})

// About page 

app.get("/about", (req, res) => {
    res.send("This is the ABOUT page")

})
//// Post reqest to '/about'
app.post("/about", (req, res) => {
    const data = req.body
    res.send(`Data received on About page: ${JSON.stringify(data)}`)
});
/// Put request to about
app.put("/about", (req, res) => {
    const updateData = req.body
    res.send(`Data Update on About page: ${JSON.stringify(updateData)}`)
});
///  delete request to about
app.delete("/about", (req, res) => {
    res.send("About page data delete successfully")
})



// Contact Page
app.get("/contact", (req, res) => {
    res.send("This is the CONTACT page")
})
//// Post reqest to '/contact'
app.post("/contact", (req, res) => {
    const data = req.body
    res.send(`Data received on Contact page: ${JSON.stringify(data)}`)
});
/// Put request to contact
app.put("/contact", (req, res) => {
    const updateData = req.body
    res.send(`Data Update on Contact page: ${JSON.stringify(updateData)}`)
});
///  delete request to contact
app.delete("/contact", (req, res) => {
    res.send("Contact page data delete successfully")
})

// get retrieve all items
app.get("/items", (req,res) => {
    res.status(200).json(items)
})

// post add a new item 
app.post("/items", (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    age: req.body.age,
    city: req.body.city
    }
    items.push(newItem)
    res.status(201).json(newItem)
})

/// put update the existing items
app.put("/items/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const itemIndex = items.findIndex(item => item.id === id)

    if(itemIndex !== -1) {
        items[itemIndex].name = req.body.name;
        items[itemIndex].age = req.body.age
        items[itemIndex].city = req.body.city   

        res.status(200).json(items[itemIndex])

    }else{
        res.status(404).json({message: "Item not found"})
    }
})

/// delete an item by id
app.delete("/items/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const itemIndex = items.findIndex(item => item.id === id)
    
    if(itemIndex !== -1){
        items.splice(itemIndex, 1) ;
        res.status(200).json({message: "Item Deleted Successfully"})
    }else{
        res.status(404).json({message: "Item not found"})
        
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`)
})