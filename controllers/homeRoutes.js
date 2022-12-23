const router = require('express').Router();
const { Post } = require("../models");

//* this is the base Express route when the "homepage.handlebars" loads
router.get('/', async (req, res) => {
    console.log("\n", "\x1b[33m", "Route for homepage rendered in homeRoutes", "\x1b[0m", "\n");
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
    res.render('login');
});

module.exports = router;

