import throttle from 'lodash.throttle';

const FORM_STATE = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
let userData = {};

formEl.addEventListener('input', throttle(onInputChange, 1000));
formEl.addEventListener('submit', onSubmit);

onPageLoad();

function onInputChange(evt) {
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(FORM_STATE, JSON.stringify(userData));
}

function onPageLoad() {
  const savedData = JSON.parse(localStorage.getItem(FORM_STATE));

  if (savedData) {
    Object.entries(savedData).forEach(([key, value]) => {
      formEl[key].value = value;
      userData[key] = value;
    });
  }
}

function onSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();

  console.dir(JSON.parse(localStorage.getItem(FORM_STATE)));
  localStorage.removeItem(FORM_STATE);
  userData = {};
}
