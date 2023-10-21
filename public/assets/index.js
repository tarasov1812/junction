import modalValidateEmail from './modal_validate_email.js';
import modalValidateInput from './modal_validate_input.js';
import formValidation from './form_validation.js';
import modalValidateInputDataBase from './modale_validate_input_dataB.js';

// Validate email of the Registration form
const emailCheck = document.getElementById('email');

emailCheck.onblur = function () {
  modalValidateEmail('email', 'invalid-email', 'myModal');
};
emailCheck.oninput = function () {
  modalValidateEmail('email', 'invalid-email', 'myModal');
};

// Validate nick name of the Registration form
const nickName = document.getElementById('nick-name');
nickName.oninput = function () {
  modalValidateInput('nick-name', 'invalid-nick-name', 'myModal');
};
nickName.onblur = function () {
  modalValidateInput('nick-name', 'invalid-nick-name', 'myModal');
};

// Validate passwords of the Registration form
const pwd = document.getElementById('password');
const rPwd = document.getElementById('repeat-password');
pwd.oninput = function () {
  modalValidateInput('password', 'invalid-password', 'myModal');
};
pwd.onblur = function () {
  modalValidateInput('password', 'invalid-password', 'myModal');
};
rPwd.oninput = function () {
  modalValidateInput('repeat-password', 'invalid-password', 'myModal');
};
rPwd.onblur = function () {
  modalValidateInput('repeat-password', 'invalid-password', 'myModal');
};

// Validation all values of the form after click on the button
const regButton = document.getElementById('registration-button');
regButton.onclick = formValidation;

// JSON fetch
function loadStatistic() {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      const { users } = data.static;
      const { messages } = data.static;
      const { todayMessages } = data.static;

      const usersCountElement = document.getElementById('usersRegistred');
      usersCountElement.innerHTML = `${users}`;

      const messagesTotalElement = document.getElementById('messagesTotal');
      messagesTotalElement.innerHTML = `${messages}`;

      const messagesTodayElement = document.getElementById('messagesToday');
      messagesTodayElement.innerHTML = `${todayMessages}`;
    })
    .catch((error) => console.error(error));
}

loadStatistic();

// Create user
const registrationButton = document.getElementById('registration-button');

registrationButton.addEventListener('click', () => {
  // Get the modal
  const modal = document.getElementById('modal-sign-in');

  const nickname = `@${document.getElementById('nick-name').value}`;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const repeatPassword = document.getElementById('repeat-password').value;

  const userData = {
    nickname,
    email,
    password,
    repeatPassword,
  };

  if (nickname !== '' && email !== '' && password !== '' && password === repeatPassword) {
    fetch('/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          modal.style.visibility = 'hidden';
          modal.style.opacity = 0;
          window.location.href = '/app';
        } else if (response.status === 400) {
          modalValidateInputDataBase('nick-name', 'invalid-nick-name', 'myModal');
        } else if (response.status === 409) {
          modalValidateInputDataBase('email', 'invalid-email', 'myModal');
        } else if (response.status === 410) {
          modalValidateInputDataBase('nick-name', 'invalid-nick-name', 'myModal');
          modalValidateInputDataBase('email', 'invalid-email', 'myModal');
        }
        return response.json();
      });
  }
});

// Login
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  // Get the modal
  const modal = document.getElementById('modal-login');

  const email = document.getElementById('login-authorization').value;
  const password = document.getElementById('login-password').value;

  const userData = {
    email,
    password,
  };

  if (email !== '' && password !== '') {
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (response.ok) {
          modal.style.visibility = 'hidden';
          modal.style.opacity = 0;
          window.location.href = '/app';
        } else if (response.status === 400) {
          modalValidateInputDataBase('login-password', 'invalid-password-login', 'loginModal');
        } else if (response.status === 404) {
          modalValidateInputDataBase('login-authorization', 'invalid-nick-name-login', 'loginModal');
        }
        return response.json();
      });
  }
});
