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

// add confirmation element
/* subConfirmation.textContent = 'Thank you for registering!';
subConfirmation.style.color = '#fe142f'

btnSubmit.addEventListener('click', () => {
  heroContent.appendChild(subConfirmation);
}); */

const lastNameInput = document.getElementById ('last');
const emailInput = document.getElementById ('email');
const checkbox1Input = document.getElementById ('checkbox1');
const firstNameInput = document.getElementById('first');

function validate() {

  console.log('Validation function called');

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const checkbox1Agree = checkbox1Input.checked;
  

  if (firstNameValue.length <2 || firstNameValue.length > 20) {
    return false;
  }

  if (lastNameValue.length <2 || lastNameValue.length > 20) {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    return false;
  }

  if (!checkbox1Agree) {
    return false;
  }

  return true;

}
