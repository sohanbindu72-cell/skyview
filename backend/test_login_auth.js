async function run() {
    console.log("Testing POST /api/auth/user/login");
    const res = await fetch('http://localhost:5000/api/auth/user/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email: "mdmahabubulalamk@gmail.com", password: "some_password" })
    });
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Response:", data);
}
run();
