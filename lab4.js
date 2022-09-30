const express = require("express")

const app = express()


const LAB4_PORT = 8080


//http://localhost8080/hello
app.get("/hello", (req, res) => {
res.send("<h1>Hello Express JS</h1>")
})


//Query Paramrter
//http://localhost8080/user?firstname=Loman&lastname=ChanShum
app.get("/user", (req, res) => {
    const first_name = req.query.firstname
    const last_mane = req.query.lastname


    //console.log(req.query)

    res.send({
        first_name,
        last_mane
    })

})

//http://localhost8080/user/Loman/ChanShum
app.post("/user/:firstname/:lastname", (req, res) => {
    const first_name = req.params.firstname
    const last_mane = req.params.lastname
    



    //Parmas Object
    //console.log(req.params)

    res.send({
        first_name,
        last_mane
    })

})


app.listen(LAB4_PORT, () => {
    console.log(`Lab4 running at http://localhost:${LAB4_PORT}/`)
})

