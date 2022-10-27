const convertButton = document.getElementById("convert-btn");

convertButton.addEventListener("click", () => {
  const inputValue = document.getElementById("text").value;

  document.getElementById("camel-case").textContent = camelCase();
  document.getElementById("pascal-case").textContent = pascalCase();
  document.getElementById("snake-case").textContent = snakeCase();
  document.getElementById("screaming-snake-case").textContent =
    screamingSnakeCase();
  document.getElementById("kebab-case").textContent = kebabCase();
  document.getElementById("screaming-kebab-case").textContent =
    screamingKebabCase();

  function camelCase() {
    let inputArray = inputValue.split("");

    for (let char = 0; char < inputArray.length; char++) {
      if (inputArray[char] === " ") {
        inputArray[char + 1] = inputArray[char + 1].toUpperCase();
        inputArray.splice(char, 1);
      }
    }
    return (camel = inputArray.join(""));
  }

  function pascalCase() {
    let inputArray = inputValue.split("");

    inputArray[0] = inputArray[0].toUpperCase();
    for (let char = 0; char < inputArray.length; char++) {
      if (inputArray[char] === " ") {
        inputArray[char + 1] = inputArray[char + 1].toUpperCase();
        inputArray.splice(char, 1);
      }
    }
    return (pascal = inputArray.join(""));
  }

  function snakeCase() {
    let inputArray = inputValue.split("");

    for (let char = 0; char < inputArray.length; char++) {
      if (inputArray[char] === " ") {
        inputArray[char] = "_";
      }
    }
    return (snake = inputArray.join(""));
  }

  function screamingSnakeCase() {
    let inputArray = inputValue.split("");

    for (let char = 0; char < inputArray.length; char++) {
      inputArray[char] = inputArray[char].toUpperCase();
      if (inputArray[char] === " ") {
        inputArray[char] = "_";
      }
    }
    return (screamingSnake = inputArray.join(""));
  }

  function kebabCase() {
    let inputArray = inputValue.split("");

    for (let char = 0; char < inputArray.length; char++) {
      if (inputArray[char] === " ") {
        inputArray[char] = "-";
      }
    }
    return (kebab = inputArray.join(""));
  }

  function screamingKebabCase() {
    let inputArray = inputValue.split("");

    for (let char = 0; char < inputArray.length; char++) {
      inputArray[char] = inputArray[char].toUpperCase();
      if (inputArray[char] === " ") {
        inputArray[char] = "-";
      }
    }
    return (screamingKebab = inputArray.join(""));
  }
});
