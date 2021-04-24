var pos = 0;
var correct = 0;
var test, testStatus, question, choice, choices, chA, chB, chC;

// this array holds objects containing the questions and answers for the Quiz
var questions = [{
    question: 'What is 36 + 42?',
    a: '64',
    b: '78',
    c: '76',
    answer: 'B'
  },
  {
    question: 'What is 7 x 4?',
    a: '21',
    b: '27',
    c: '28',
    answer: 'C'
  },
  {
    question: 'What is 16 / 4?',
    a: '4',
    b: '6',
    c: '3',
    answer: 'A'
  },
  {
    question: 'What is 8 x 12?',
    a: '88',
    b: '112',
    c: '96',
    answer: 'C'
  }
]

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}
// Write a function that counts the time down from the moment the modal open button is clicked
// write a function that subtracts time from that timer whenever a wrong answer is selected
// Write a function that adds to a score total every time a correct answer is selected
// write a function that displays the score total and the high scores once the test is completed
// Grab Elements Generic function
function get (x) {
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion () {
  test = get('test');
  if (pos >= questions.length) {
    test.innerHTML = '<h2>You got ' + correct + ' of ' + questions.length + " questions correct</h2>";
    get('testStatus').innerHTML = 'Test completed'
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when test is completed
    return false;
  }
  get("testStatus").innerHTML = 'Question' + (pos + 1) + 'of' + questions.length;

  var question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  document.getElementById('test').innerHTML = '<h3>' + question + '</h3>';
  // display the answer options
  // the += appends to the data we started on the line above
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice == questions[pos].answer) {
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener('load', renderQuestion);
