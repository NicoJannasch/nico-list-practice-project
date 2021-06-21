const button = document.querySelector(`.button`);
const buttonClear = document.querySelector(`.button_clear`);
const body = document.querySelector(`body`);
const content = document.querySelector(`.content`);

let counter = 1;

button.addEventListener(`click`, function () {
  const text = `${counter}. ${prompt(`Add To-Do Here!`)}`;
  content.insertAdjacentHTML(
    "beforeend",
    `<h2 class="text text_${counter}">${text}</h2>`
  );
  localStorage.setItem(`listItem ${counter}`, text);
  localStorage.setItem(`counter`, `${counter}`);

  document
    .querySelector(`.text_${counter}`)
    .addEventListener(`click`, function (e) {
      console.log(e.target);
      e.target.textContent.slice(-1) != `✅`
        ? (e.target.textContent += ` ✅`)
        : (e.target.textContent = e.target.textContent.slice(0, -1));
      localStorage.setItem(`listItem ${counter - 1}`, e.target.textContent);
    });

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
  counter = +listLength + 1;
  for (let i = 1; i <= listLength; i++) {
    const localStorageItem = localStorage.getItem(`listItem ${i}`);
    content.insertAdjacentHTML(
      "beforeend",
      `<h2 class="text">${localStorageItem}</h2>`
    );
  }
  addEventListenerToAllTextElements();
});

const addEventListenerToAllTextElements = function () {
  let textElements = document.getElementsByClassName(`text`);

  for (let i = 0; i < textElements.length; i++) {
    console.log(i, textElements[i]);
    textElements[i].addEventListener(`click`, function (e) {
      console.log(e.target);
      e.target.textContent.slice(-1) != `✅`
        ? (e.target.textContent += ` ✅`)
        : (e.target.textContent = e.target.textContent.slice(0, -1));
      localStorage.setItem(`listItem ${i + 1}`, e.target.textContent);
    });
  }
};
