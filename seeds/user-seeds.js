const { User } = require('../models/User');

const userData = [
    {
		"username": "Jesse",
        "email": "jesse@gmail.com",
		"password": "password1"
	},
	{
		"username": "TomTom",
        "email": "tomeats@hotmail.com",
		"password": "password2"
	},
	{
		"username": "Sarah",
        "email": "sarah@gmail.com",
		"password": "password3"
	},
	{
		"username": "Philip",
        "email": "philitup@live.com",
		"password": "password4"
	},
    {
		"username": "Jason",
        "email": "jayjayhayhay@gmail.com",
		"password": "password4"
	}
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;