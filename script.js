  const passwordOutput = document.getElementById("password");
  const lengthSlider = document.getElementById("length-slider");
  const sliderValue = document.getElementById("slider-value");

  const includeUppercase = document.getElementById("uppercase");
  const includeLowercase = document.getElementById("lowercase");
  const includeNumbers = document.getElementById("numbers");
  const includeSymbols = document.getElementById("symbols");

  const generateButton = document.getElementById("generateButton");

  const UPPERCASE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
  const NUMBER_CHARS = "0123456789";
  const SYMBOL_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  updateSliderBackground();
  
  // Update slider value display
  lengthSlider.addEventListener("input", () => {
    sliderValue.textContent = lengthSlider.value;
    updateSliderBackground();
  });

  function updateSliderBackground() {
    const min = lengthSlider.min;
    const max = lengthSlider.max;
    const val = lengthSlider.value;
  
    const percent = ((val - min) / (max - min)) * 100;
  
    lengthSlider.style.background = `linear-gradient(
      to right,
      var(--accent) 0%,
      var(--accent) ${percent}%,
      #ccc ${percent}%,
      #ccc 100%
    )`;
  }  

  // Generate password on button click
  generateButton.addEventListener("click", () => {
    const length = parseInt(lengthSlider.value);
    let chars = "";

    if (includeUppercase.checked) chars += UPPERCASE_CHARS;
    if (includeLowercase.checked) chars += LOWERCASE_CHARS;
    if (includeNumbers.checked) chars += NUMBER_CHARS;
    if (includeSymbols.checked) chars += SYMBOL_CHARS;

    if (chars.length === 0) {
      passwordOutput.textContent = "Select at least one option!";
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    passwordOutput.textContent = password;
  });
