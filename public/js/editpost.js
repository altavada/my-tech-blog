// submit edited post
document
  .getElementById('submit-edit')
  .addEventListener('click', async (event) => {
    event.preventDefault();
    const postId = event.target.getAttribute('data-id');
    const request = {
      title: document.getElementById('edit-title').value,
      body: document.getElementById('edit-body').value,
    };
    if (request.title && request.body) {
      const response = await fetch(`/api/post/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(request),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Error updating post');
      }
    } else {
      alert('Missing required fields');
    }
  });