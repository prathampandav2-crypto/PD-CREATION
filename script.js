const form = document.querySelector('#login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const eye = document.querySelector('.eye');
const allowedEmail = 'pratham@123gmail.com';
const allowedPassword = 'pandav@123';

[email, password].forEach((field) => field.addEventListener('input', () => {
  field.closest('.field').classList.toggle('valid', field.value.length > 0);
}));

eye.addEventListener('click', () => {
  const showing = password.type === 'text';
  password.type = showing ? 'password' : 'text';
  eye.textContent = showing ? '⌁' : '◉';
  eye.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (email.value.trim() !== allowedEmail || password.value !== allowedPassword) {
    form.classList.remove('done');
    password.setCustomValidity('Incorrect email or password.');
    password.reportValidity();
    password.focus();
    return;
  }
  password.setCustomValidity('');
  form.classList.add('done');
  window.setTimeout(() => { window.location.href = 'home.html'; }, 700);
});
