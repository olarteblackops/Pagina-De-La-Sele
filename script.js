const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('error', () => {
    image.classList.add('image-missing');
    image.removeAttribute('src');
  });
});

document.querySelectorAll('.filter-tabs button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter-tabs button.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.player-card').forEach((player) => {
      player.classList.toggle('is-hidden', filter !== 'todos' && player.dataset.position !== filter);
    });
  });
});

document.querySelectorAll('.gallery-filters button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.gallery-filters button.active')?.classList.remove('active');
    button.classList.add('active');
    const filter = button.dataset.galleryFilter;
    document.querySelectorAll('.gallery-person').forEach((person) => {
      person.classList.toggle('is-hidden', filter !== 'todos' && person.dataset.galleryType !== filter);
    });
  });
});

const matchDate = new Date('2026-06-07T15:00:00');
const timeValue = document.querySelector('.match-footer span:last-child');

function updateCountdown() {
  const distance = Math.max(0, matchDate.getTime() - Date.now());
  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  if (timeValue) timeValue.innerHTML = `${String(days).padStart(2, '0')} <i>días</i> : ${String(hours).padStart(2, '0')} <i>hrs</i> : ${String(minutes).padStart(2, '0')} <i>min</i>`;
}

updateCountdown();
setInterval(updateCountdown, 60000);
