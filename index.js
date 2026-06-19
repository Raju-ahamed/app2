const express = require('express');
const phones = require('./phone.json');
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send("hello hi world")
});
app.get('/phone', (req, res) => {
    res.send(phones);
});
app.get('/phone/:id', (req, res) => {
    const id = req.params.id;
    const phone = phones.find(phone => phone.id === Number(id)) || {};
    res.send(phone)
})
app.listen(port, () => {
    console.log(`example app lisiting on port ${port}`)
})