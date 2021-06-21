const text = document.querySelector(`.text`);
const button = document.querySelector(`.button`);
const buttonClear = document.querySelector(`.button_clear`);
const body = document.querySelector(`body`);
const content = document.querySelector(`.content`);

let counter = 1;

button.addEventListener(`click`, function () {
  const text = `${counter}. ${prompt(`Add To-Do Here!`)}`;
  console.log(text);
  content.insertAdjacentHTML("beforeend", `<h2 class="text">${text}</h2>`);
  localStorage.setItem(`listItem ${counter}`, text);
  localStorage.setItem(`counter`, `${counter}`);
  counter++;
});

buttonClear.addEventListener(`click`, function () {
  const confirmationMessage = prompt(`Type DELETE to delete your list.`);

  if (confirmationMessage === `DELETE`) {
    localStorage.clear();
    content.innerHTML = "";
    counter = 1;
  }
});

window.addEventListener(`load`, function () {
  const listLength = localStorage.getItem(`counter`);
  counter = +listLength + 1
  console.log(counter)
  for (let i = 1; i <= listLength; i++) {
    console.log(i);
    const localStorageItem = localStorage.getItem(`listItem ${i}`);
    content.insertAdjacentHTML(
      "beforeend",
      `<h2 class="text">${localStorageItem}</h2>`
    );
  }
});
