const { randomBytes } = require("crypto");
const express = require("express");
const path = require("path");

const app = express();
const port = 8080;


app.use(express.json())
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'front/index.html'));
// });

app.use(express.static(__dirname + "/front"));

                                                                                                                                                      

app.put('/sendfile', (req, res) => {
    things = {
        1: "1",
        2: "2",
        3: "3"
    }
    let sample = req.body;
    console.log("fjaowiefjawe", sample);
    res.send(things[sample.value]);
})

app.get('/randomsudoku', (req, res) => {
    randomSudokus = ["530070000600195000098000060800060003400803001700020006060000280000419005000080079", "007090010500006207380070605020040501000387000709020080108050076203100004090060300", "002940700300507001090001082700009260950060038028300005270800040003704600006093100", "060080070084000201700503006305090007020604010100070804500309002208000150070010040", "003700500500360700920000001070000305046205870301000040600000098005024006007006200"] 
    res.send(randomSudokus[Math.floor(Math.random() * 5)]);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});