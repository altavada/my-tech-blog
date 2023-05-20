// delete post
document.querySelectorAll('.deletebtn').forEach((item) => {
  item.addEventListener('click', async (event) => {
    const postId = event.target.getAttribute('data-id');
    const response = await fetch(`/api/post/${postId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response.ok)
    if (response.ok) {
      location.reload();
    } else {
      alert('Error while deleting');
    }
  });
});
