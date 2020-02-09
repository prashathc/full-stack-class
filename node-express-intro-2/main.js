const express = require('express');
const password = 'mysecretpassword';

const cups = [
    {
        typer: 'plastic',
        color: 'green',
        'size': 'L',
    },
    {
        typer: 'glass',
        color: 'blue',
        'size': 'M',
    },
];

const cupRouter = express.Router();
cupRouter.route('/')
    .get((req, res, next) => {
        console.log(req.newField)
        if (req.query.search) {
            const searchCups = cups.filter((cups) => {
                return cups.colour === req.query.search
            })

            res.json({ data: searchCups });
            return
        }

        res.json({ data: cups })
    })
    .post((req, res, next) => {
        console.log(req.body)
        const { type, colour, size } = req.body;
        const newCup = {
            type,
            colour,
            size
        }

        cups.push(newCup);
        res.json(newCup);
    })


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    // sensitive passwords/tockens go in authorization header
    if (req.headers.authorization !== password) {
        res.status(404).send('<h1>Wrong password</h1>');
        return
    }
    // setting the password to be in the header
    res.setHeader('password', password);
    next();
})

app.use('/cups', cupRouter)
app.use(express.static('public'));
app.listen('8080', console.log('listening on port 8080'));
