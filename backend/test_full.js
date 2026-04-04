async function run() {
    console.log("Testing full cycle");
    const res = await fetch('http://localhost:5000/api/auth/user/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email: "mdmahabubulalamk@gmail.com", password: "temppassword" }) // We don't have the password, we can't do this easily.
    });
}
run();
