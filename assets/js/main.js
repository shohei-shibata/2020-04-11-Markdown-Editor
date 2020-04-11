document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  displayOutput();
});

function displayOutput() {
  console.log("display output");
  const outputArea = document.getElementById("output");
  const text = document.createTextNode("Output text goes here");


  outputArea.appendChild(text);
}
