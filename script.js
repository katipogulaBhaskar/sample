// Handle Signup
document.getElementById('SignupForm').addEventListener('submit', async(e) => {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('singnupPassword').value;

    try {
        const response = await fetch('http://localhost:5000/api/user/signupUser', {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({ username, email, password })
            
        });

        const result = await response.json();
        alert(result.msg);

        if(response.ok) {
            document.getElementById('SignupForm').reset();
        }

    } catch(error) {
        console.error('Error: ', error);
    }

});

//Handle Login
document.getElementById('LoginForm').addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch("http://localhost:5000/api/user/loginUser", {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();
        alert(result.msg);

        if(response.ok) {
            localStorage.setItem('token', result.token);
            document.getElementById('LoginForm').reset();
        }

    } catch(error) {
        console.log('Error: ', error);
    }
})