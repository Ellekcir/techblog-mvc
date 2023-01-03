const router = require('express').Router();
const { Post, Comment, User } = require("../models");

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

router.get('/posts/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comment,
            include: [ User ]
          }
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
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

