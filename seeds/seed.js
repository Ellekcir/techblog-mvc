const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// This will seed the db with pre-made data 
// the seeds are filled by using the Models
const seedComment = require('./commentData.json');
const seedPost = require('./postData.json');
const seedUser = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    console.log('\n----- DATABASE SYNCED -----\n');

    await User.bulkCreate(seedUser, {
      individualHooks: true,
      returning: true,
    });

    console.log('\n----- USERS SEEDED -----\n');
    await Post.bulkCreate(seedPost, {
        individualHooks: true,
        returning: true,
      });

      console.log('\n----- POSTS SEEDED -----\n');
      await Comment.bulkCreate(seedComment, {
        individualHooks: true,
        returning: true,
      });
  
      console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0);
  };
  
  seedDatabase();

