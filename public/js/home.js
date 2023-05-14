// new post btn
document
  .getElementById('newpost')
  .addEventListener('click', () => window.location.replace('/api/post'));

// edit post btn
document.querySelectorAll('.editbtn').forEach((item) => {
  item.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');
    window.location.replace(`/api/post/${id}`);
  });
});

// comment thread toggle
document.querySelectorAll('.commentbtn').forEach((item) => {
  item.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');
    const state = event.target.getAttribute('data-state');
    const box = document.getElementById(`comments${id}`);
    if (state === 'closed') {
      box.style.display = 'block';
      event.target.setAttribute('data-state', 'open');
    } else {
      box.style.display = 'none';
      event.target.setAttribute('data-state', 'closed');
    }
  });
});

// comment reply box toggle
document.querySelectorAll('.replybtn').forEach((item) => {
  item.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id');
    const state = event.target.getAttribute('data-state');
    const box = document.getElementById(`replyto${id}`);
    if (state === 'closed') {
      box.style.display = 'block';
      event.target.setAttribute('data-state', 'open');
    } else {
      box.style.display = 'none';
      event.target.setAttribute('data-state', 'closed');
    }
  });
});

// comment submit button
document.querySelectorAll('.submitreply').forEach((item) => {
  item.addEventListener('click', async (event) => {
    const id = event.target.getAttribute('data-id');
    const author = document.getElementById('currentuser').innerHTML;
    const threadBox = document.getElementById(`comments${id}`);
    const replyBox = document.getElementById(`replybox${id}`);
    const replyText = document.getElementById(`writefor${id}`);
    const request = {
      body: replyText.value,
      parent_id: id,
    };
    if (request.body) {
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const newCommentBox = document.createElement('div');
        const content = `
        <div class="comment-card">
          <p>
              ${request.body}
          </p>
        </div>
        <div class="comment-by">
            <p> – @<span>${author}</span></p>
        </div>`;
        newCommentBox.setAttribute('class', 'comment-container');
        newCommentBox.innerHTML = content;
        threadBox.insertBefore(newCommentBox, replyBox);
      } else {
        alert('Error posting comment.');
      }
    } else {
      alert('Cannot post empty comment.');
    }
  });
});
