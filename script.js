const inputNumber = document.getElementById("input-number");
const inputBase = document.getElementById("input-base");
const outputBase = document.getElementById("output-base");
const convertButton = document.getElementById("convert-button");
const outputNumber = document.getElementById("output-number");
const errorMessage = document.getElementById("error-message");

convertButton.addEventListener("click", () => {
  // Clear error message
  errorMessage.innerText = "";

  const input = inputNumber.value;
  const inputRadix = getInputRadix();
  const outputRadix = getOutputRadix();

  try {
    let result;
    // Check if input number is a fractional number
    if (input.includes(".")) {
      const parts = input.split(".");
      const integerPart = parseInt(parts[0], inputRadix);
      let fractionalPart = 0;
      let fraction = 1;
      // Convert fractional part to decimal
      for (let i = 0; i < parts[1].length; i++) {
        fraction /= inputRadix;
        fractionalPart += parseInt(parts[1][i], inputRadix) * fraction;
      }
      result = (integerPart + fractionalPart).toString(outputRadix).toUpperCase();
    } else {
      result = parseInt(input, inputRadix).toString(outputRadix).toUpperCase();
    }
    outputNumber.value = result;
  } catch (error) {
    errorMessage.innerText = "Invalid input";
  }
});

function getInputRadix() {
  switch (inputBase.value) {
    case "binary":
      return 2;
    case "octal":
      return 8;
    case "decimal":
      return 10;
    case "hexadecimal":
      return 16;
    default:
      return 10;
  }
}

function getOutputRadix() {
  switch (outputBase.value) {
    case "binary":
      return 2;
    case "octal":
      return 8;
    case "decimal":
      return 10;
    case "hexadecimal":
      return 16;
    default:
      return 10;
  }
}




