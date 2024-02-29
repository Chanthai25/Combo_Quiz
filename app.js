const question = [
  {
    question: "What is a Cambodian traditional dance ?",
    answer: [
      { text: "Ballet Dance", correct: false },
      { text: "Apsara Dance", correct: true },
      { text: "Chhayam Dance", correct: false },
      { text: "Modern dance", correct: false },
    ],
  },
  {
    question: "Which religions do most of Cambodian people adhere to?",
    answer: [
      { text: "Muslim", correct: false },
      { text: "Christianity", correct: false },
      { text: "Buddhism", correct: true },
      { text: "Hinduism", correct: false },
    ],
  },
  {
    question:
      "How many Cambodian consonants and vowels  are there in Cambodian Language?",
    answer: [
      { text: "33 consonants ,24 vowels", correct: false },
      { text: "33 consonants ,23 vowels", correct: true },
      { text: "35 consonants ,23 vowels", correct: false },
      { text: "23 consonants ,33 vowels", correct: false },
    ],
  },
  {
    question: "What is the capital city of Cambodia?",
    answer: [
      { text: "KAMPONG CHAM", correct: false },
      { text: "SIEM REAP", correct: false },
      { text: "SIHANOUK VILLE", correct: false },
      { text: "PHNOM PENH", correct: true },
    ],
  },
  {
    question: "What is an official Cambodian language?",
    answer: [
      { text: "Khmer", correct: true },
      { text: "Vietnamese", correct: false },
      { text: "Cambodian", correct: false },
      { text: "Filipino", correct: false },
    ],
  },
  {
    question: "Which one is Cambodian currency?",
    answer: [
      { text: "Kip", correct: false },
      { text: "Baht", correct: false },
      { text: "Riel", correct: true },
      { text: "Krona", correct: false },
    ],
  },
  {
    question: "How much land does Cambodia have?",
    answer: [
      { text: "181 030km²", correct: false },
      { text: "180 035km²", correct: false },
      { text: "181 035km²", correct: true },
      { text: "181 034km²", correct: false },
    ],
  },
  {
    question: "How many colors is the Cambodian flag?",
    answer: [
      { text: "Black White Red", correct: false },
      { text: "Pink Red White", correct: false },
      { text: "Blue White Red", correct: true },
      { text: "Blue White Green", correct: false },
    ],
  },
  {
    question: " _________is known as the Rice Bowl of Cambodia.",
    answer: [
      { text: "Battambang", correct: true },
      { text: "Siem Reap", correct: false },
      { text: "Kratie", correct: false },
      { text: "Prey Veng", correct: false },
    ],
  },
  {
    question: "King Norodom _________is the present King of Cambodia.",
    answer: [
      { text: "Sihanouk", correct: false },
      { text: "Suramarit", correct: false },
      { text: "Sihamoni", correct: true },
      { text: "Prey Veng", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${question.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < question.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < question.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
