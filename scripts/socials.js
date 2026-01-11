const socialContainer = document.querySelector('.social-container');
const socialMediaIconsContainer = [];

function SocialIcon(image, link, description) {
  this.image = image,
  this.link = link,
  this.description = description,
  socialMediaIconsContainer.push(this)
};

new SocialIcon ('./icons/github.png', 'https://github.com/SgnCycles', 'Find my codes here');
new SocialIcon ('./icons/linkedin.png', 'https://www.linkedin.com/in/signebekere/', 'Let\'s connect here');
new SocialIcon ('./icons/follow_up.png', 'https://www.linkedin.com/in/signebekere/', 'Email me here');

socialMediaIconsContainer.forEach(icon => {
  const card = document.createElement('div');
  const link = document.createElement('a');
  const image = document.createElement('img');
  const description = document.createElement('p');

  card.classList.add('social-media');
  link.classList.add('social-link');
  image.classList.add('social-image');
  description.classList.add('social-description');

  image.src = icon.image;
  link.href = icon.link;
  link.target = '_blank';
  description.textContent = icon.description;

  link.appendChild(image);
  card.appendChild(link);
  link.appendChild(description);
  socialContainer.appendChild(card);
})