const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const e = require('express');


const route = require('./routes');
const db = require('./config/db');
const User = require('./app/controllers/models/User');
db.connect();

const app = express();
const port = 5000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// App engine
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Authentication routes
app.post('/api/auth/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/auth/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ userId: user._id }, 'your-secret-key');
            res.json({ token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Your existing routes
route(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});