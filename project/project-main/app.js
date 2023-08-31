const { error } = require("console");
const express = require("express");
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser')
// const session = require('express-session')
const bodyParser = require('body-parser')
// const mysql = require('mysql2');
const mongoose = require('mongoose')

const app = express();
const port = 80;

// app.use(bodyParser.json());
const url = `mongodb+srv://prathamesh17170:prathamesh123@cluster0.3erfosm.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
// For using static files
app.use("/static", express.static("static"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// app.use(cookieParser('secret'))
// app.use(session({ cookie: { maxAge: null } }))
// //flash message middleware
// app.use((req, res, next) => {
//     res.locals.message = req.session.message
//     delete req.session.message
//     next()
// })

const handlebars = require('express3-handlebars').create()
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')


//set view directory
// app.set("view", path.join(__dirname, "view"));

app.get("/", (req, res) => {
    res.render('index');
});
app.get("/booking", (req, res) => {
    res.render('booking');
});
app.get("/contact", (req, res) => {
    res.render('contact');
});
app.get("/menu", (req, res) => {
    res.render('menu');
});
app.get("/service", (req, res) => {
    res.render('service');
});
app.get("/team", (req, res) => {
    res.render('team');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/testimonial", (req, res) => {
    res.render('testimonial');
});
//send data to mongodb database

app.post('/contact', (req, res) => {
    const contact_us_record = mongoose.model('contact_us_record', {
        Name: String,
        Email: String,
        Contact_number: Number,
        Address: String
    });

    let myData = new contact_us_record(req.body);
    console.log(myData);

    myData.save().then(() => {
        res.redirect('contact');
    }).catch(() => {
        res.status(400).send("item was not saved to the database")
    });
});
app.post('/booking', (req, res) => {
    const booking_record = mongoose.model('booking_record', {
        Name: String,
        Email: String,
        Date: Date,
        Number_of_people: Number,
        Special_request: String
    });

    let myData = new booking_record(req.body);
    console.log(myData);

    myData.save().then(() => {
        res.redirect('booking');
    }).catch(() => {
        res.status(400).send("item was not saved to the database")
    });
});
app.post('/', (req, res) => {
    const booking_record = mongoose.model('booking_record', {
        Name: String,
        Email: String,
        Date: Date,
        Number_of_people: Number,
        Special_request: String
    });

    let myData = new booking_record(req.body);
    console.log(myData);

    myData.save().then(() => {
        res.redirect('/');
    }).catch(() => {
        res.status(400).send("item was not saved to the database")
    });
});

// app.get("/about", (req, res) => {
//     res.send("This is my first about of express app")
// });
// app.post("/about", (req, res) => {
//     res.send("This is my post requist first about of express app")
// });
/*
app.post('/contact', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var Contant_number = req.body.Contant_number;
    var message = req.body.message;
    console.log("name");
    connection.connect((error) => {
        if (error) throw error;
        var sql = "INSERT INTO customer values('" + name + "','" + email + "','" + Contant_number + "','" + message + "')"
        connection.query(sql, function (error, result) {
            if (error) throw error;
            res.send('Customer have been registered successfully' + result.insertId);
        })
    })
});
*/

// app.post('/contact', (req, res) => {
//     const { Name, Email, Contact_number, Address } = req.body;

//     const sql = 'INSERT INTO customer (name, email,Contact_number,Address) VALUES (?,?,?,?)';
//     const values = [Name, Email, Contact_number, Address];

//     connection.query(sql, values, (error, results) => {
//         if (error) {
//             console.error('Error inserting data:', error);
//             return results;
//         }
//         // alert("message is recieved successfully");
//         // window.alert("message is recieved successufully");
//         // return re.render('ndow.alert("message is recieve');
//         return res.redirect('/contact');
//         //res.json({ message: 'Data inserted successfully' });
//     });
// });
// app.post('/booking', (req, res) => {
//     const { Name, Email, Date, Number_of_people, Special_request } = req.body;

//     const sql = 'INSERT INTO booking (name, email, Date, Number_of_people, Special_request) VALUES (?,?,?,?,?)';
//     const values = [Name, Email, Date, Number_of_people, Special_request];

//     connection.query(sql, values, (error, results) => {
//         if (error) {
//             console.error('Error inserting data:', error);
//             return results;
//         }
//         return res.redirect('/booking');
//     });
// });
// app.post('/index', (req, res) => {
//     const { Name, Email, Date, Number_of_people, Special_request } = req.body;

//     const sql = 'INSERT INTO booking (name, email, Date, Number_of_people, Special_request) VALUES (?,?,?,?,?)';
//     const values = [Name, Email, Date, Number_of_people, Special_request];

//     connection.query(sql, values, (error, results) => {
//         if (error) {
//             console.error('Error inserting data:', error);
//             return results;
//         }
//         return res.redirect('/index');
//     });
// });
// app.post('/', (req, res) => {
//     const { Name, Email, Date, Number_of_people, Special_request } = req.body;

//     const sql = 'INSERT INTO booking (name, email, Date, Number_of_people, Special_request) VALUES (?,?,?,?,?)';
//     const values = [Name, Email, Date, Number_of_people, Special_request];

//     connection.query(sql, values, (error, results) => {
//         if (error) {
//             console.error('Error inserting data:', error);
//             return results;
//         }
//         return res.redirect('/');
//     });
// });
app.listen(port, () => {
    console.log(`this application started successfully on port ${port}`);
});