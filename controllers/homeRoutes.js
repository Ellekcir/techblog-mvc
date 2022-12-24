const router = require('express').Router();
const { Post } = require("../models");

//* this is the base Express route when the "homepage.handlebars" loads
router.get('/', async (req, res) => {

    try {
        console.log('test');
        const postData = await Post.findAll();
        console.log(postData); 
        const posts = postData.map(post => post.get({ plain: true }));
        console.log(posts);
        res.render('homepage', {posts});
    } catch (err) {
console.log(err);
    }
});

router.get('/login', (req, res) => {
    
    if (req.session.loggedIn) {
       
      }
      // Otherwise, render the 'login' Handlebars template
      res.render('login', {
          username: req.session.username,
      });
  });


router.get('/signup', (req, res) => {

    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
   
    res.render('signup', {
        username: req.session.username,
    });
});
module.exports = router;

