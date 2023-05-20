const loginHandler = async (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email && password) {
    let body = {
      email: email,
      password: password,
    };
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Login Error');
    }
  }
};

document.getElementById('loginsubmit').addEventListener('click', loginHandler);
