const wrongButton = document.getElementById('wrong-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const porgressBarElement = document.getElementById('progress-bar')

let currentQuestionIndex = 0;
let shuffledQuestions

const questions = [
  {
    question: '¿Cuanto es 2 + 3?',
    answers: [
      { text: '5', correct: true },
      { text: '4', correct: false },
      { text: '4', correct: false },
      { text: '6', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answers: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]

setNextQuestion()

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


function setNextQuestion() {
  resetState()
  let percentage = (100 / questions.length) * currentQuestionIndex
  porgressBarElement.style.width = percentage + "%"

  /* porgressBarElement.style.transform = `scaleX(${percentage}%)` */
  console.log(percentage)
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex])
    
  } else {
    const image = questionContainerElement.querySelector("img")
    const p1 = document.createElement('p')
    const p2 = document.createElement('p')

    p1.classList.add("lightgray-highlight")
    p1.innerHTML = `¡Complestaste la lección! <span class="golden-highlight small-title">+10 EXP</span>`

    p2.classList.add("lightgray-highlight")
    p2.innerHTML = `Super Bono <span class="golden-highlight small-title">+3 EXP</span>`

    questionElement.innerText = "Acabas de completar una lección y conseguir 13 EXP "

    questionElement.classList.remove("left")
    image.classList.remove("hide")
    questionContainerElement.classList.add("center")
    questionContainerElement.removeChild(answerButtonsElement)
    questionContainerElement.appendChild(p1)
    questionContainerElement.appendChild(p2)
  }
}

function showQuestion(question) {
  
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('button')
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  nextButton.classList.remove("selected-next")
}

function selectAnswer(e) {
  const selectedButton = e.target
  let selected = answerButtonsElement.querySelector(".selected-button")

  if (selected) {
    selected.classList.remove("selected-button")
  }
  

  selectedButton.classList.add("selected-button")
  nextButton.classList.add("selected-next")
}

