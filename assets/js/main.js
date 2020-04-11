const converter = new showdown.Converter();
const inputTextarea = document.getElementById("input-textarea");
const outputArea = document.getElementById("output");

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  submit(); 
});

document.addEventListener('keydown', function(e) {
  const key = e.code;
  const shift = e.shiftKey;

  if (shift && e.code == "Enter") {
    submit();
  } else if (shift && e.code == "Backspace") {
    reset();
  }
});

function submit() {
  const inputText = inputTextarea.value;
  convertToMarkdown(inputText); 
}

function displayOutput(convertedText) {
  const text = convertedText;
  outputArea.innerHTML = text;
  inputTextarea.focus();
}

function convertToMarkdown(input) {
  const output = converter.makeHtml(input); 
  displayOutput(output);
}

function reset() {
  inputTextarea.value = "";
  outputArea.innerHTML = "";
  inputTextarea.focus();
}
