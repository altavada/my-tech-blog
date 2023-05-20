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
          replyText.value = null;
        } else {
          alert('Error posting comment.');
        }
      } else {
        alert('Cannot post empty comment.');
      }
    });
  });