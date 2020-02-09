const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { query } = req;
    console.log(query)
    if (query.tupac && query.tupac !== "") {
        return res.json({ message: `tupac is da ${query.tupac}` })
    }
    res.json({ message: 'great req' });
})

app.get('/:id', (req, res, next) => {
    const { id } = req.params
    res.json({ message: `your id is ${id}` })
})

app.listen('8080', console.log('listening on port 8080'));

