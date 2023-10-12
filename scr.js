const creationOfDivs = function () {
  const allDivsForNumbers = document.getElementById("all-numbers");
  for (let i = 0; i < 76; i++) {
    const DivForOneNumber = document.createElement("div");
    DivForOneNumber.className = "div-number";
    allDivsForNumbers.appendChild(DivForOneNumber);
    const h3ForDivs = document.createElement("h3");
    h3ForDivs.className = "number";
    DivForOneNumber.appendChild(h3ForDivs);
    h3ForDivs.innerText = i + 1;
  }
};
let randomNumberSorted = [];
let randomNumber;
const randomNumberCreation = () => {
  do {
    randomNumber = Math.ceil(Math.random() * 76);
    if (randomNumberSorted.includes(randomNumber) === false) {
      randomNumberSorted.push(randomNumber);
      console.log(randomNumber);
      console.log(randomNumberSorted);
      return randomNumber;
    }
  } while (
    randomNumberSorted.includes(randomNumber) ||
    randomNumberSorted.length !== 76
  );
};

window.addEventListener("DOMContentLoaded", () => {
  const randomNumberButton = document.getElementById("random-number-button");

  creationOfDivs();

  randomNumberButton.onclick = function (e) {
    e.preventDefault();
    const randomNumber = document.querySelector("#your-number > p");

    randomNumber.innerText = randomNumberCreation();

    const allNumbers = document.querySelectorAll("#all-numbers .number");
    // console.log(allNumbers);
    allNumbers.forEach((h3) => {
      //   console.log(h3.innerText);
      if (randomNumber.innerText === h3.innerText) {
        h3.parentElement.classList.add("number-extracted");
      }
    });
  };
});
