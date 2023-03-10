const sequelize = require('../config/connection');
// This will seed the db with pre-made data 
// the seeds are filled by using the Models
const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');



const seedAll = async () => {

    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');

    await seedPost();
    console.log('\n----- POSTS SEEDED -----\n');

    await seedComment();
    console.log('\n----- COMMENTS SEEDED -----\n');

    process.exit(0); 
};

seedAll();








// const { User, Post, Comment } = require('../models');

// const seedDatabase = async () => {
//     await sequelize.sync({ force: true });
  
//     await User.bulkCreate(seedUser, {
//       individualHooks: true,
//       returning: true,
//     });

//     await Post.bulkCreate(seedPost, {
//         individualHooks: true,
//         returning: true,
//       });

//       await Comment.bulkCreate(seedComment, {
//         individualHooks: true,
//         returning: true,
//       });
  
//     process.exit(0);
//   };
  
//   seedDatabase();

