import { initialState, State } from "./state";

const wordEl = document.getElementById("word") as HTMLDivElement;
const wrongLettersEl = document.getElementById(
  "wrong-letters"
) as HTMLDivElement;
const playAgainBtn = document.getElementById(
  "play-button"
) as HTMLButtonElement;
const popup = document.getElementById("popup-container") as HTMLDivElement;
const notification = document.getElementById(
  "notification-container"
) as HTMLDivElement;
const finalMessage = document.getElementById("final-message") as HTMLElement;
const finalMessageRevealWord = document.getElementById(
  "final-message-reveal-word"
) as HTMLElement;

const figureParts: NodeListOf<SVGElement> =
  document.querySelectorAll(".figure-part");

function displayWord(selectedWord: string, correctLetters: string[]) {
  wordEl.innerHTML = `
    ${selectedWord
      .split("")
      .map(
        (letter) => `
          <span class="letter">
            ${correctLetters.includes(letter) ? letter : ""}
          </span>
        `
      )
      .join("")}
  `;
}

function displayWrongLetters(wrongLetters: string[]) {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `;

  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;

    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });
}

function displaySuccessPopup() {
  finalMessage.innerText = "Congratulations! You won! 😃";
  finalMessageRevealWord.innerText = "";
  popup.style.display = "flex";
}

function displayFailPopup(selectedWord: string) {
  finalMessage.innerText = "Unfortunately you lost. 😕";
  finalMessageRevealWord.innerText = `...the word was: ${selectedWord}`;
  popup.style.display = "flex";
}

function clearPopup() {
  popup.style.display = "none";
}

function alreadyEnteredPopup() {
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

export function main(words: string[]) {
  let state: State = initialState(
    words[Math.floor(Math.random() * words.length)]
  );

  window.addEventListener("keydown", (e) => {
    if (state.playable) {
      const letter = e.key.toLowerCase();

      if (e.key.length === 1 && /^[a-z]$/.test(letter)) {
        if (state.selectedWord.includes(letter)) {
          if (!state.correctLetters.includes(letter)) {
            state.correctLetters.push(letter);
            displayWord(state.selectedWord, state.correctLetters);
          } else {
            alreadyEnteredPopup();
          }
        } else {
          if (!state.wrongLetters.includes(letter)) {
            state.wrongLetters.push(letter);
            displayWrongLetters(state.wrongLetters);
          } else {
            alreadyEnteredPopup();
          }
        }

        if (isAllCharsInArray(state.selectedWord, state.correctLetters)) {
          state.playable = false;
          displaySuccessPopup();
        } else if (state.wrongLetters.length === state.selectedWord.length) {
          state.playable = false;
          displayFailPopup(state.selectedWord);
        }
      }
    }
  });

  function isAllCharsInArray(str: string, arr: string[]) {
    for (let i = 0; i < str.length; i++) {
      if (!arr.includes(str[i])) {
        return false;
      }
    }
    return true;
  }

  playAgainBtn.addEventListener("click", () => {
    state = initialState(state.selectedWord);
    displayWord(state.selectedWord, state.correctLetters);
    displayWrongLetters(state.wrongLetters);
    clearPopup();
  });

  displayWord(state.selectedWord, state.correctLetters);
}

const words = ["typescript", "interface", "wizard"];
main(words);
