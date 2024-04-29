const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

form.addEventListener('input', function () {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

window.addEventListener('load', function () {
  const savedFormData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  emailInput.value = savedFormData.email || '';
  messageInput.value = savedFormData.message || '';
});

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Fill please all fields.');
  }
});