const { Post } = require('../models');

const postData = [
  {
    title: `Mickey's First Post`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id est nec felis posuere dignissim. Donec rhoncus nulla ut libero rutrum ultrices. Aenean facilisis massa ullamcorper eleifend feugiat. Sed eleifend, dui sit amet tempor fermentum, tortor nisl consectetur odio, eget posuere odio sapien quis tortor. Quisque gravida orci nec ex consectetur, in placerat nunc eleifend. Donec quis convallis augue, id consectetur ex. Ut posuere nibh ac enim vehicula, id bibendum orci semper.`,
    author_id: 1,
  },
  {
    title: `Bugs' First Post`,
    body: `Donec sit amet tempor quam. Suspendisse tincidunt vehicula tellus id commodo. Morbi efficitur condimentum urna et fermentum. Vivamus interdum vestibulum metus, et iaculis massa finibus scelerisque. Nunc a quam et turpis aliquet semper ut at lectus. Vestibulum a pulvinar magna. Nam laoreet imperdiet ornare. Etiam non massa volutpat risus porttitor vestibulum. Etiam molestie, neque quis imperdiet rutrum, dolor orci posuere elit, sodales dignissim massa dui ut neque. Sed leo lorem, mollis efficitur sagittis vitae, porttitor quis ex.`,
    author_id: 2,
  },
  {
    title: `Tweety's First Post`,
    body: `Phasellus nibh ligula, dictum non bibendum sed, aliquet vel ipsum. Sed dictum urna eu nunc vestibulum euismod. Nam vel justo cursus arcu lobortis tempor. Aliquam vel ipsum volutpat, faucibus tortor quis, sodales dui. Sed dignissim non turpis ut dignissim. Praesent feugiat odio eu pretium mollis. Duis dignissim purus non dui eleifend, nec commodo nisi pharetra. Fusce quis gravida orci. Nam eu elementum velit.`,
    author_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;
