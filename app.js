const express = require("express")
const app = express();

// app.get("/", (req, res)=> {
//     res.send("hello");
// });

// const port = process.env.PORT || 5000;

// app.listen(port, ()=> {
//     console.log(`Listening on port ${port}`)
// })

app.get("/", (req, res) => res.send("Hello World!!"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
