require('dotenv').config();
const { query } = require('./src/config/db');
const bcrypt = require('bcryptjs');

async function check() {
   const email = "mdmahabubulalamk@gmail.com";
   const users = await query('SELECT * FROM users WHERE email = ?', [email]);
   console.log("Users found:", users.length);
   if (users.length > 0) {
       console.log("User details:", users[0]);
       // we can't test the password since we don't know it, but we can verify they exist.
   }
}
check();
