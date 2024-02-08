const express = require('express');
const app=express()
const path=require("path");
const hbs = require('hbs');
const Collection=require("./mongodb");

const templatePath = path.join(__dirname, "../templates");

app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.urlencoded({extended:false}));

app.get("/", (req,res) => {
    res.render("index")
});

app.get("/submit", (req,res) => {
    res.render("submit")
});

app.post("/submit",async (req,res) => {
    const data = {
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        gender:req.body.gender,
        knownlang:req.body.knownlang
    }

    await Collection.insertMany([data])

    res.render("submit")

});

// const port = process.env.port || 8080;
// app.listen(port, ()=> console.log(`Listining on port ${port}..`))


app.listen(3000, () => {
    console.log(`connected on port 3000`);
});