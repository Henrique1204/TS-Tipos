import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const hideErrorMessage = (form: HTMLFormElement): void => {
  form
    .querySelectorAll(`.${SHOW_ERROR_MESSAGES}`)
    .forEach((field) => field.classList.remove(SHOW_ERROR_MESSAGES));
};

const showErrorMessage = (input: HTMLInputElement, msg: string): void => {
  const formField = input.parentElement as HTMLDivElement;
  const errorMsg = formField.querySelector('.error-message') as HTMLSpanElement;

  errorMsg.innerText = msg;
  formField.classList.add(SHOW_ERROR_MESSAGES);
};

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
  inputs.forEach((input) => {
    if (!input.value) showErrorMessage(input, 'Campo vazio!');
  });
};

const checkEmail = (input: HTMLInputElement): void => {
  if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido!');
};

const checkEqualPassword = (
  password1: HTMLInputElement,
  password2: HTMLInputElement
): void => {
  if (password1.value !== password2.value) {
    showErrorMessage(password1, 'Senhas não batem!');
    showErrorMessage(password2, 'Senhas não batem!');
  }
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
  return form.querySelectorAll(`.${SHOW_ERROR_MESSAGES}`).length === 0;
};

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  hideErrorMessage(form);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPassword(password, password2);

  if (shouldSendForm(form)) console.log('Enviou!');
});
