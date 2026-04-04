const jwt = require('jsonwebtoken');
const jose = require('jose');

async function test() {
   const secretStr = 'fallback_secret_key';
   const token = jwt.sign({ test: 'hello' }, secretStr);
   console.log("Token:", token);

   try {
       const secret = new TextEncoder().encode(secretStr);
       const result = await jose.jwtVerify(token, secret);
       console.log("Verification success!", result.payload);
   } catch(e) {
       console.log("Verification failed!", e.message);
   }
}
test();
