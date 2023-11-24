function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const heroContent = document.querySelector (".hero-content");
const subConfirmation = document.createElement('p')
const btnSubmit = document.getElementById('btn-sub');
const closeForm = document.getElementById('close-form');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form

closeForm.addEventListener('click', () => {
  modalbg.style.display = 'none';
});

function validate() {
  const formDataElements = document.querySelectorAll('.formData');
  hideAllErrors(formDataElements);

  const firstNameValue = document.getElementById('first').value.trim();
  const lastNameValue = document.getElementById('last').value.trim();
  const emailValue = document.getElementById('email').value.trim();
  const checkbox1Agree = document.getElementById('checkbox1').checked;

  if (firstNameValue.length < 2 || firstNameValue.length > 20) {
    displayError('We need your first name!', 'first');
    return false;
  }

  if (lastNameValue.length < 2 || lastNameValue.length > 20) {
    displayError('We need your last name!', 'last');
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    displayError('Check your email address!', 'email');
    return false;
  }

  if (!checkbox1Agree) {
    displayError('Check the box please!', 'checkbox1');
    return false;
  }

  return true;
}

function displayError(errorMessage, inputId) {
  const formDataElement = document.getElementById(inputId).closest('.formData');
  formDataElement.dataset.error = errorMessage;
  formDataElement.dataset.errorVisible = 'true';
}

function hideAllErrors(formDataElements) {
  formDataElements.forEach((formDataElement) => {
    formDataElement.dataset.error = '';
    formDataElement.dataset.errorVisible = 'false';
  });
}