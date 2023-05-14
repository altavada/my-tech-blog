// new post btn
document
  .getElementById('newpost')
  .addEventListener('click', () => window.location.replace('/api/post'));


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
