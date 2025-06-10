const express = require("express");
const app = express();
const port = 3333;
const app2 = express();
const port2 = 3334;
const app3 = express();
const port3 = 3335;

app.get('/', (req, res) => {
    res.send('This is web server1.')
});
app.listen(port, () => {
    console.log(`Web server1 is listening on http://localhost:${port}`)
});

app.use('/', express.static('public'))
app.get('/test', (req, res) => {
    res.send('Hello World!');
});





app2.get('/', (req, res) => {
    res.send('This is web server2.');
});
app2.listen(port2, () => {
    console.log(`Web server2 is listening on http://localhost:${port2}`)
});

app3.get('/', (req, res) => {
    res.send('This is web server3.');
})
app3.listen( port3, () => {
    console.log(`Web server3 is listening on http://localhost:${port3}`);
});

