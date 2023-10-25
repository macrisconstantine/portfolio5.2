const colorBoxes = document.querySelectorAll(".color-box");
const selectedColorText = document.getElementById("selectedColor");
const colorHistoryList = document.getElementById("colorHistory");

colorBoxes.forEach(colorBox => {
  colorBox.addEventListener("click", () => {
    const selectedColor = colorBox.getAttribute("data-color");
    selectedColorText.style.visibility = "visible";
    selectedColorText.style.color = selectedColor;
    selectedColorText.textContent = "Hello world!";
    addColorToHistory(selectedColor);
  });
});

function addColorToHistory(color) {
  const historyItem = document.createElement("li");
  historyItem.className = "color-history-item";
  historyItem.style.color = color;
  historyItem.textContent = color;
  colorHistoryList.appendChild(historyItem);
}