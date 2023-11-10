const connectDB = require('./config/db.config');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const passportSetup = require('./config/passport-config');
//const mongoose = require('./models/user.model');
const User =require('./models/user.model')
const Auth =require('./models/auth.model')
const Table =require('./models/table.model')
const reservation=require('./models/auth.model')
const Subscriber=require('./models/subscribers.model')
const Register =require('./models/registerrestaurant.model')
const authroutes = require('./routes/user.routes');
const { Collection } = require('mongoose');
const { register } = require('./controllers/auth.controllers');
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT || 5003;

app.use(express.static('assets'));
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('node_modules'));

app.use(session({
    secret: 'your_session_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 20 }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

const router = express.Router();
app.use('/', router);
router.get('/login.ejs', (req, res) => {
    res.render("login.ejs");
});
router.get('/register.ejs', (req, res) => {
    res.render("register.ejs");
});

router.get('/Subscribe.ejs', (req, res) => {
    res.render("Subscribe.ejs");
});

router.get('/contact.ejs', (req, res) => {
    res.render("contact.ejs");
});

router.get('/blog.ejs', (req, res) => {
    res.render("blog.ejs");
});

router.get('/blog-detail.ejs', (req, res) => {
    res.render("blog-detail.ejs");
});

router.get('/blog-detail-right-sidebar.ejs', (req, res) => {
    res.render("blog-detail.ejs");
});

router.get('/blog-detail-leftsidebar.ejs', (req, res) => {
    res.render("blog-detail.ejs");
});


router.get('/register-reservation.ejs', (req, res) => {
    res.render("register-reservation.ejs");
});


router.get('/restaurant-found2.ejs', (req, res) => {
    res.render("restaurant-found2.ejs");
});

router.get('/copperivy.ejs', (req, res) => {
    res.render("copperivy.ejs");
});

router.get('/thewineandbottle.ejs', (req, res) => {
    res.render("thewineandbottle.ejs");
});

router.get('/artcafe.ejs', (req, res) => {
    res.render("artcafe.ejs");
});

router.get('/jengajungle.ejs', (req, res) => {
    res.render("jengajungle.ejs");
});


router.get('/pablos.ejs', (req, res) => {
    res.render("pablos.ejs");
});
router.get('/cjs.ejs', (req, res) => {
    res.render("cjs.ejs");
});

router.get('/baobox.ejs', (req, res) => {
    res.render("baobox.ejs");
});

router.get('/bambino.ejs', (req, res) => {
    res.render("bambino.ejs");
});

router.get('/oysterbay.ejs', (req, res) => {
    res.render("oysterbay.ejs");
});


router.get('/403.ejs', (req, res) => {
    res.render("403.ejs");
});
router.get('/404.ejs', (req, res) => {
    res.render("404.ejs");
});
router.get('/reservation.ejs', (req, res) => {
    res.render("reservation.ejs");
});
router.get('/registerrestaurant.ejs', (req, res) => {
    res.render("registerrestaurant.ejs");
});
app.post('/register',async(req,res)=>{
     const data={
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,

     }
     const existingUser=await User.findOne({email:data.email});
     if(existingUser){
        res.render('403.ejs')
     }else{
        const userdata=await User.insertMany (data);
        res.render('Subscribe.ejs')
        console.log(userdata);  

     }
    
}); 
app.post('/login',async(req,res)=>{
    const user ={

       email:req.body.email,
       password:req.body.password,

    }
    const existingUser=await User.findOne({email:user.email});
    if(existingUser){
       res.render('Subscribe.ejs')
    }else{
       const userdata=await Auth.insertMany (user);
       res.render('404.ejs')
       console.log(userdata);  

    }
   
}); 
app.post('/reserve', async (req, res) => {
    const table = {
        name: req.body.name,
        capacity: req.body.capacity,
        email: req.body.email,
        phone: req.body.phone,
        date:req.body.date
    };

    try {
        const existingReservation = await Table.findOne({ name: table.name });

        if (existingReservation) {
            res.render('403.ejs'); // Reservation with the same name exists
        } else {
            const Reservation = await Table.create(table);
            console.log(Reservation);
            res.render('reservation.ejs'); // Successfully created the reservation
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.post('/subscribe', async (req, res) => {
    const subscribers = {
        email: req.body.email,
    };

    const subscriber = await Subscriber.create(subscribers);

    res.render('Subscribe.ejs');
    console.log(subscriber);
});
app.post('/registerrestaurant', async (req, res) => {
    const restaurants = {
        managersname:req.body.managersname,
        restaurantname:req.body.restaurantname,
        email: req.body.email,
        managersphone:req.body.managersphone,
        location:req.body.location,
        cuisines:req.body.cuisines,
        username:req.body.username
    };

    const register = await Register.create(restaurants);
    console.log(register);
});

// Add more route handlers here...
app.use('/', router);

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
