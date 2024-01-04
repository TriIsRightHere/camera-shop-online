const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const e = require('express');
dotenv.config();

const route = require('./routes');
const db = require('./config/db');
//const User = require('./controllers/models/User');

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

//API
//app.use("/api/import", ImportData);



// Authentication routes
// app.post('/api/auth/signup', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const user = new User({ username, password: hashedPassword });
//         await user.save();
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// app.post('/api/auth/signin', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });

//         if (user && bcrypt.compare(password, user.password)) {
//             const token = jwt.sign({ userId: user._id }, 'your-secret-key');
//             res.json({ token });
//         } else {
//             res.status(401).json({ error: 'Invalid credentials' });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// Your existing routes
route(app);

const PORT = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





// const path = require('path');
// const express = require('express');
// const hbs = require('express-handlebars');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');
// const flash = require('connect-flash');
// const multer = require('multer');
// const db = require('./config/db');
// const port = 5000;

// const errorController = require('./controllers/error');
// const User = require('./models/user');
// const app = express();

// // Connect to MongoDB using the connect function
// db.connect();

// // App engine
// app.engine('hbs', hbs.engine({ extname: '.hbs' }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, './resources/views/'));

// const store = new MongoDBStore({
//     uri: 'mongodb://127.0.0.1:27017/ecom',
//     collection: 'ecom'
// });
// // app.use(session({
// //     resave: false,
// //     saveUninitialized: false,
// //     store: store
// // }));
// // const csrfProtection = new csrf();
// // const fileStorage = multer.diskStorage({
// //     destination: (req, file, cb) => {
// //         cb(null, 'images')
// //     },
// //     filename: (req, file, cb) => {
// //         cb(null, new Date().toISOString() + '-' + file.originalname);
// //     }
// // })
// // const fileFilterF = (req, file, cb) => {
// //     if ((file.mimetype == 'image/png') || (file.mimetype == 'image/jpg') || (file.mimetype == 'image/jpeg')) {
// //         cb(null, true);
// //     } else {
// //         cb(null, false);
// //     }
// // }

// //setting up routes
// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
// const authRoutes = require('./routes/auth');

// //middlewares to be used by every incoming request
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(multer({ storage: fileStorage, fileFilter: fileFilterF }).single('imageUrl')) //configuring file storage options
// // app.use(express.static(path.join(__dirname, 'public')));
// // app.use('/images', express.static(path.join(__dirname, 'images')));


// //csrfProtection & flash messages which get destroyed when request served(through response-send/redirect)
// // app.use(csrfProtection);
// app.use(flash());

// //session setting up & adding fields to request body
// // app.use((req, res, next) => {
// //     if (!req.session.user) {
// //         return next();
// //     }
// //     User.findById(req.session.user._id)
// //         .then(user => {
// //             req.user = user;
// //             next();
// //         })
// //         .catch(err => console.log(err));
// // });

// // app.use((req, res, next) => {
// //     res.locals.isAuthenticated = req.session.isLoggedIn;
// //     res.locals.csrfToken = req.csrfToken();
// //     next();
// // });

// //routing requests & error handling middleware
// app.use('/admin', adminRoutes);
// app.use(shopRoutes);
// app.use(authRoutes);
// app.use(errorController.get500);
// app.use(errorController.get404);

// // app.use(function (err, req, res, next) {
// //     res.redirect('/500');
// // });

// mongoose.connect('mongodb://127.0.0.1:27017/ecom', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => {
//         console.log('Connected to local server!');
//         app.listen(5000);
//     })
//     .catch(err => {
//         console.log(err);
//     });

