const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const { query } = req;
    console.log(query)
    if (query.tupac && query.tupac !== "") {
        res.json({ message: `tupac is da ${query.tupac}` })
    }
    res.json({ message: 'great req' });

})

app.listen('8080', console.log('listening on port 8080'));

