const signupHandler = async (event) => {
  event.preventDefault();
  const email = document.getElementById('newemail').value;
  const username = document.getElementById('newuser').value;
  const password = document.getElementById('newpassword').value;
  if (email && username && password) {
    let body = {
      name: username,
      email: email,
      password: password,
    };
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Error.');
    }
  }
};

document.getElementById('newsubmit').addEventListener('click', signupHandler);
