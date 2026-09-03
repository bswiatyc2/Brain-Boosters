"use strict";

// Flashcards: question on front, answer on back
let flashcards = [
  { q: "What is 5 + 2x = 25?", a: "10" },
  { q: "What is 30 - 5x = 10?", a: "Paris" },
  { q: "What is 6 + 3x = -12?", a: "Water" },
  { q: "What is 44 - 12x = -16x?", a: "Jupiter" },
  { q: "What is 48 + 6x = 6?", a: "Cold" },
  { q: "What is 30 - 5x = 10?", a: "Distance ÷ Time" },
  { q: "What is 30 - 5x = 10?", a: "Shakespeare" },
  { q: "What is 30 - 5x = 10?", a: "3" },
  { q: "What is 30 - 5x = 10?", a: "Leaves" }
];

let board = document.getElementById("board");

// Fisher–Yates shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Create 3x3 flashcard grid
function createFlashcardsGrid() {
  board.innerHTML = "";
  let shuffled = shuffle([...flashcards]);

  shuffled.forEach(card => {
    let tile = document.createElement("div");
    tile.className = "tile";

    tile.innerHTML = `
      <div class="inner">
        <div class="front">${card.q}</div>
        <div class="back">${card.a}</div>
      </div>
    `;

    tile.onclick = () => tile.classList.toggle("flipped");
    board.appendChild(tile);
  });
}

window.addEventListener("load", createFlashcardsGrid);