let isModalOpen = false;
let isLightTheme = true;
const scaleFactor = 1 / 20;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList.add('modal__overlay--visible');

  emailjs
    .sendForm(
     'gracedis_contactform',
     'template_yd7yj7h',
     event.target,
    )
    .then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList.add('modal__overlay--visible');
    })
    .catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert('The email service is temporarily unavailable. Please try again later.');
    })
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  return document.body.classList.toggle('modal--open');
}

function toggleContrast() {
  isLightTheme = !isLightTheme;
  return document.body.classList.toggle('dark-theme');
}

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape');
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px) rotate(${x * boolInt * 10}deg)`
  }
}