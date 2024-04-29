const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

let formData = {
  email: "",
  message: ""
};

function saveFormDataToLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormDataFromLocalStorage() {
  const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  formData.email = savedFormData.email || '';
  formData.message = savedFormData.message || '';
}

window.addEventListener('load', () => {
  loadFormDataFromLocalStorage();
  emailInput.value = formData.email;
  messageInput.value = formData.message;
});

form.addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  saveFormDataToLocalStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields.');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    event.target.reset();
  }
});