const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');


// const { result } = require('lodash');

const dbURI = 'mongodb+srv://amitray1608:amitray1608@amit.11gsz.mongodb.net/database?retryWrites=true&w=majority'
//register

mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true})
    .then( (result) => console.log('connected to db'))
    .catch((err) => console.log(err));
app.set('view engine', 'ejs');


app.listen(4000);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

//database res
/*
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new-blog 2',
        snippet: 'about my blogyy',
        body: 'more about mu sdlhlsadf'
    });
    blog.save()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    })
})

//se all blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

//see one blog
app.get('/single-blog', (req, res) => {
    Blog.findById('')
    .then((result) => {
        res.send(result);
    })
    .catch((err) => {
        console.log(err);
    });
})

*/
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/blogs');
}); 
app.get('/about', (req, res) => {
    res.render('about', {title : 'About'});
}); 

app.use(blogRoutes);
// app.use('/blogs', blogRoutes);


app.use((req, res) => {
   res.render('404', {title : '404'});
});
// app.get('/profile/:name', (req, res) => {
//     var data = {age : 20, job : 'nalayak hai', hobbies : ['playing basketball', 'cooking', 'watching anime']};
//     res.render('profile', {person: req.params.name, data: data});
// });

// app.get()
