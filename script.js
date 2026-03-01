// Navigation Tabs
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const sectionId = btn.getAttribute('data-section');
    
    // Remove active class from all buttons and sections
    navButtons.forEach(b => b.classList.remove('active'));
    contentSections.forEach(section => section.classList.remove('active'));
    
    // Add active class to clicked button and corresponding section
    btn.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
  });
});

// Toggle Specializations
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const specId = btn.getAttribute('data-spec');
    const specContent = document.getElementById(specId);
    
    specContent.classList.toggle('hidden');
    btn.classList.toggle('active');
  });
});

// Richtige Antworten
document.addEventListener("DOMContentLoaded", function () {

  const quizAnswers = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: false,
    6: true
  };

  let userAnswers = {};

  // Antwort auswählen
  document.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", function () {

      const questionDiv = this.closest(".quiz-question");
      const questionNum = questionDiv.getAttribute("data-question");
      const answer = this.getAttribute("data-answer") === "true";

      userAnswers[questionNum] = answer;

      // Alle Buttons der Frage zurücksetzen
      questionDiv.querySelectorAll(".quiz-option")
        .forEach(btn => btn.classList.remove("selected"));

      // Geklickten markieren
      this.classList.add("selected");
    });
  });

  // Quiz prüfen
  document.getElementById("checkBtn").addEventListener("click", function () {
  let points = 0;

  for (let i = 1; i <= 6; i++) {

    const questionDiv = document.querySelector(
      `.quiz-question[data-question="${i}"]`
    );

    const buttons = questionDiv.querySelectorAll(".quiz-option");

    buttons.forEach(btn => {
      const answer = btn.getAttribute("data-answer") === "true";

      // Richtige Antwort markieren
      if (answer === quizAnswers[i]) {
        btn.classList.add("correct");
      }

      // Falsche Auswahl markieren
      if (btn.classList.contains("selected") && answer !== quizAnswers[i]) {
        btn.classList.add("wrong");
      }
    });

    if (userAnswers[i] === quizAnswers[i]) {
      points++;
    }
  }

  let message = "Du hast " + points + " von 6 Punkten erreicht.<br>";

  if (points <= 2) {
    message += "Schau dir die Webseite nochmal an.";
  } else if (points <= 4) {
    message += "Gut, aber es geht besser!";
  } else if (points === 5) {
    message += "Sehr gut!";
  } else if (points === 6) {
    message += "Du solltest Fachinformatiker werden!";
  }

  document.getElementById("finalResult").innerHTML = message;
});


  // Reset
  document.getElementById("resetBtn").addEventListener("click", function () {
    userAnswers = {};
    document.getElementById("finalResult").innerHTML = "";

    document.querySelectorAll(".quiz-option")
      .forEach(btn => btn.classList.remove("selected"));
  });

});document.addEventListener("DOMContentLoaded", function () {

  const quizAnswers = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: false,
    6: true
  };

  let userAnswers = {};

  // Antwort auswählen
  document.querySelectorAll(".quiz-option").forEach(button => {
    button.addEventListener("click", function () {

      const questionDiv = this.closest(".quiz-question");
      const questionNum = questionDiv.getAttribute("data-question");
      const answer = this.getAttribute("data-answer") === "true";

      userAnswers[questionNum] = answer;

      // Alle Buttons der Frage zurücksetzen
      questionDiv.querySelectorAll(".quiz-option").forEach(btn => btn.classList.remove("selected"));

      // Geklickten markieren
      this.classList.add("selected");
    });
  });

  // Quiz prüfen
  document.getElementById("checkBtn").addEventListener("click", function () {
    let points = 0;

    for (let i = 1; i <= 6; i++) {
      const questionDiv = document.querySelector(`.quiz-question[data-question="${i}"]`);
      const buttons = questionDiv.querySelectorAll(".quiz-option");

      buttons.forEach(btn => {
        const answer = btn.getAttribute("data-answer") === "true";

        // Richtige Antwort grün
        if (answer === quizAnswers[i]) {
          btn.classList.add("correct");
        }

        // Falsch ausgewählte rot
        if (btn.classList.contains("selected") && answer !== quizAnswers[i]) {
          btn.classList.add("wrong");
        }
      });

      if (userAnswers[i] === quizAnswers[i]) {
        points++;
      }
    }

    let message = `Du hast ${points} von 6 Punkten erreicht.<br>`;

    if (points <= 3) {
      message += "Schau dir die Webseite nochmal an.";
    } else if (points <= 4) {
      message += "Gut, aber es geht besser!";
    } else if (points === 5) {
      message += "Sehr gut!";
    } else if (points === 6) {
      message += "Du solltest Fachinformatiker werden!";
    }

    document.getElementById("finalResult").innerHTML = message;
  });

  // Reset
  document.getElementById("resetBtn").addEventListener("click", function () {
    userAnswers = {};
    document.getElementById("finalResult").innerHTML = "";
    document.querySelectorAll(".quiz-option").forEach(btn => btn.classList.remove("selected", "correct", "wrong"));
  });

});
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Button Symbol ändern
  if(document.body.classList.contains('dark-mode')){
    darkModeToggle.textContent = 'Light Mode';
  } else {
    darkModeToggle.textContent = 'Dark Mode';
  }
});
