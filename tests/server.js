const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    res.sendFile(__dirname + '\\index.html');
});

app.get('https://stats.quake.com/', function (req, res) {
    res.redirect('https://stats.quake.com/');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))