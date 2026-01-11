const projectContainer = document.querySelector('.projects-card-container');
const projects = [];

function MyProject(image, title, link, icon) {
  this.image = image,
  this.title = title,
  this.link = link,
  this.icon = icon,
  projects.push(this)
};

// testing
new MyProject ('./images/project_test.png', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.png');

new MyProject ('./images/project_test.png', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.png');

new MyProject ('./images/project_test.png', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.png');

new MyProject ('./images/project_test.png', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.png');

new MyProject ('./images/project_test.png', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.png');

new MyProject ('./images/project_test.png', 'JS Web Game', 'https://fg-assignment3-js-web-game.vercel.app/', './icons/github.png');

projects.forEach(project => {
  const card = document.createElement('div');
  const cardImage = document.createElement('div');
  const image = document.createElement('img');
  const cardTitle = document.createElement('div');
  const title = document.createElement('p');
  const cardLink = document.createElement('div');
  const link = document.createElement('a');
  const icon = document.createElement('img');

  card.classList.add('project-card');
  cardImage.classList.add('project-card-image');
  image.classList.add('project-image');
  cardTitle.classList.add('project-card-title');
  title.classList.add('project-title');
  cardLink.classList.add('project-card-link');
  link.classList.add('project-link');
  icon.classList.add('card-icon');

  image.src = project.image;
  link.href = project.link;
  title.textContent = project.title;
  icon.src = project.icon

  projectContainer.appendChild(card);
  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardLink);

  cardImage.appendChild(image);
  cardTitle.appendChild(title);
  cardLink.appendChild(link);
  link.appendChild(icon);
})