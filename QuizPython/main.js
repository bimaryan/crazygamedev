var currentQuestion = 0;
var score = 0;

var questions = [
  {
    question: "Apa bahasa pemrograman yang digunakan dalam website ini?",
    choices: ["Python", "Java", "JavaScript"],
    correctAnswer: 2
  },
  {
    question: "Berapa hasil dari 2 + 2?",
    choices: ["3", "4", "5"],
    correctAnswer: 1
  },
  {
    question: "Bagaimana cara print Python yang benar?",
    choices: [
      "<code>print('HelloWorld')</code>",
      "<code>print(HelloWorld)</code>",
      "<code>Print(HelloWorld)</code>"
    ],
    correctAnswer: 0
  },
  {
    question: "Apa itu Python?",
    choices: [
      "Sebuah kucing peliharaan",
      "Sebuah jenis pohon",
      "Sebuah bahasa pemrograman"
    ],
    correctAnswer: 2
  },
  {
    question: "Apa output dari kode berikut? print(2 + 3 * 4 - 6)",
    choices: ["-1", "8", "14"],
    correctAnswer: 1
  },
  {
    question: "Apa yang dilakukan fungsi len() dalam Python?",
    choices: [
      "Menghitung panjang dari sebuah string",
      "Mengambil input dari pengguna",
      "Mengubah string menjadi huruf kapital"
    ],
    correctAnswer: 0
  },
  {
    question: "Bagaimana Anda memasukkan KOMENTAR dalam kode Python?",
    choices: [
      "#ini adalah komen",
      "//ini adalah komen",
      "/*ini adalah komen*/"
    ],
    correctAnswer: 1
  },
  {
    question: "Bagaimana Anda membuat variabel dengan nilai numerik 5?",
    choices: [
      "<code>x = int(5)</code>",
      "Kedua jawaban lainnya benar",
      "<code>x = 5</code>"
    ],
    correctAnswer: 2
  },
  {
    question: "apa format file di pemrograman python?",
    choices: [
      "py",
      ".py",
      ".cs"
    ],
    correctAnswer: 1
  },
  {
    question: "Apa output dari print str [2: 5] if str = 'Hello World!'?",
    choices: [
      "llo Dunia!",
      "H",
      "llo"
    ],
    correctAnswer: 2
  },
  // Tambahkan soal-soal lainnya di sini (total 35 soal)
];

function startQuiz() {
  var startButton = document.getElementById("startButton");
  var quizCard = document.getElementById("quizCard");

  startButton.style.display = "none";
  quizCard.classList.remove("hidden");

  displayQuestion();
}

function displayQuestion() {
  var questionElement = document.getElementById("question");
  var choicesElement = document.getElementById("choices");

  questionElement.innerHTML = questions[currentQuestion].question;

  choicesElement.innerHTML = "";
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    choicesElement.innerHTML +=
      '<input type="radio" class="form-check-input" name="choice" value="' +
      i +
      '">' +
      questions[currentQuestion].choices[i] +
      "<br>";
  }
}

function checkAnswer() {
  var choices = document.getElementsByName("choice");
  var selectedChoice;

  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      selectedChoice = choices[i].value;
      break;
    }
  }

  if (selectedChoice == questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

function displayResult() {
  var quizCard = document.getElementById("quizCard");
  var resultCard = document.getElementById("resultCard");
  var shareButton = document.getElementById("shareButton");
  var restartButton = document.getElementById("restartButton");

  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");
  resultCard.innerHTML = "Skor Anda: " + score + " dari " + questions.length;

  shareButton.style.display = "block";
  restartButton.style.display = "block";
}

function shareResult() {
  var shareUrl = "https://crazygamedev.netlify.app/quizpython/result?score=" + score + "&total=" + questions.length;
  // Ganti URL di atas dengan URL yang sesuai untuk hasil kuis Anda

  // Contoh: WhatsApp
  window.open(
    "https://wa.me/send?text=" + encodeURIComponent(shareUrl),
    "Bagikan di WhatsApp",
    "width=600,height=400"
  );

  // Anda dapat menambahkan logika untuk platform media sosial lainnya di sini
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  var quizCard = document.getElementById("quizCard");
  var resultCard = document.getElementById("resultCard");
  var shareButton = document.getElementById("shareButton");
  var restartButton = document.getElementById("restartButton");

  resultCard.classList.add("hidden");
  shareButton.style.display = "none";
  restartButton.style.display = "none";
  quizCard.classList.remove("hidden");

  displayQuestion();
}

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);

var restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", restartQuiz);