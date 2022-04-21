const express = require("express");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const users = [
    { id: 1, name: "Arif", email: "arif@gmail.com" },
    { id: 2, name: "binu", email: "binu@gmail.com" },
    { id: 3, name: "shahin", email: "shahin@gmail.com" },
    { id: 4, name: "naim", email: "naim@gmail.com" },
    { id: 5, name: "shuvo", email: "shuvo@gmail.com" },
    { id: 6, name: "nasib", email: "nasib@gmail.com" },
    { id: 7, name: "shuvodas", email: "shuvodas@gmail.com" },
    { id: 8, name: "ridoy", email: "ridoy@gmail.com" },
    { id: 9, name: "borhan", email: "borhan@gmail.com" },
    { id: 10, name: "mozahid", email: "mozahid@gmail.com" }
]

app.get("/", (req, res) => {
    res.send("Hello Bangladesh!")
})
app.get("/users", (req, res) => {

    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {
        res.send(users);
    }

})
app.post("/user", (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})
app.get("/user/:id", (req, res) => {
    console.log(req.params);
    const userId = parseInt(req.params.id);
    const currentUser = users.find(user => user.id === userId);
    res.send(currentUser ? currentUser : "Sorry this user not found.");

})

app.listen(port, () => {
    console.log("Example app listening on port", port);
})