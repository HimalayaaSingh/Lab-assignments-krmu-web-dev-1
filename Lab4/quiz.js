// Quiz data: MCQs + hints
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "A) Hyper Trainer Marking Language",
      "B) HyperText Markup Language",
      "C) Hybrid Text Making Line",
      "D) Home Tool Markup Language",
    ],
    answer: "b",
    hint: "It is the main markup language for building web pages.",
  },
  {
    question: "Which property changes text color in CSS?",
    options: ["A) font-color", "B) text-style", "C) color", "D) paint"],
    answer: "c",
    hint: "It’s one simple word—also used in JavaScript styling.",
  },
  {
    question: "JavaScript is primarily used for ___ on web pages.",
    options: ["A) Structure", "B) Interaction", "C) Styling", "D) Hosting"],
    answer: "b",
    hint: "CSS handles styling; JS handles user involvement.",
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    options: ["A) var", "B) let", "C) const", "D) All of the above"],
    answer: "d",
    hint: "All three keywords can create variables.",
  },
  {
    question: "Which method converts text to lowercase?",
    options: [
      "A) .toSmall()",
      "B) .lower()",
      "C) .toLowerCase()",
      "D) .smallCase()",
    ],
    answer: "c",
    hint: "Starts with 'to' and ends with 'Case()'.",
  },
  {
    question: "CSS stands for:",
    options: [
      "A) Creative Style System",
      "B) Cascading Style Sheets",
      "C) Computer Styled Sections",
      "D) Colorful Styling Syntax",
    ],
    answer: "b",
    hint: "It controls the design theme of web pages.",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["A) //", "B) #", "C) <!-- -->", "D) **"],
    answer: "a",
    hint: "It’s the same as C, C++, and Java single-line comments.",
  },
];

// Function: Run quiz
function runQuiz() {
  let score = 0;
  const timeLimit = 10; // seconds per question

  console.clear();
  alert(
    "Welcome to the Advanced JavaScript Quiz! 🌟\nYou have 10 seconds per question."
  );

  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];

    // Build question text
    let questionText = `${q.question}\n\n`;
    q.options.forEach((opt) => (questionText += opt + "\n"));
    questionText += `\n(You have ${timeLimit} seconds. Enter A, B, C, or D)`;

    // Timer start
    let answered = false;
    let userAnswer = "";
    const startTime = Date.now();

    // Prompt loop that checks timer
    while (!answered) {
      userAnswer = prompt(questionText);

      if (userAnswer === null) {
        alert("Quiz cancelled.");
        return;
      }

      const elapsed = (Date.now() - startTime) / 1000;

      if (elapsed > timeLimit) {
        alert("⏳ Time's up! You missed this question.");
        userAnswer = "";
        break;
      } else {
        answered = true;
      }
    }

    const formatted = userAnswer.toLowerCase().trim();

    if (formatted === q.answer) {
      score++;
      alert("✅ Correct! Great job!");
    } else {
      alert(
        `❌ Incorrect!\nHint: ${
          q.hint
        }\nCorrect answer: ${q.answer.toUpperCase()}`
      );
    }
  }

  // Final score
  alert(`🎉 Quiz Complete!\nYour Score: ${score}/${quizQuestions.length}`);

  // Score-based messages
  if (score === quizQuestions.length) {
    alert("🌟 Perfect score! You're a web development wizard!");
  } else if (score >= quizQuestions.length * 0.7) {
    alert("💪 Great job! You're getting strong with web development.");
  } else {
    alert("📘 Keep practicing — you'll improve quickly!");
  }

  // High score saving
  saveHighScore(score);

  // Restart option
  const restart = prompt("Would you like to play again? (yes/no)")
    .toLowerCase()
    .trim();
  if (restart === "yes") {
    runQuiz();
  } else {
    alert("Thanks for playing! 😊");
  }
}

// Save high score to local storage
function saveHighScore(currentScore) {
  let highScore = localStorage.getItem("quizHighScore");

  if (!highScore || currentScore > Number(highScore)) {
    localStorage.setItem("quizHighScore", currentScore);
    alert(`🏆 New High Score! You scored ${currentScore}.`);
  } else {
    alert(`Your Score: ${currentScore}\nHigh Score: ${highScore}`);
  }
}

// Start quiz
runQuiz();
