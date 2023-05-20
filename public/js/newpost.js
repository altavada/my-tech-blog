// submit new post
document
  .getElementById('submit-new')
  .addEventListener('click', async (event) => {
    event.preventDefault();
    const request = {
      title: document.getElementById('edit-title').value,
      body: document.getElementById('edit-body').value,
    };
    if (request.title && request.body) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Error while posting');
      }
    } else {
      alert('Missing required fields');
    }
  });
