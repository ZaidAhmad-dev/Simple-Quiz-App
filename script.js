const quizData = [
    {
        question: 'How old Zaid is?',
        a: 10,
        b: 20,
        c: 21,
        d: 50,
        correct: 'c'
    },

    {
        question: 'Who is the current Prime Minister of Pakistan?',
        a: 'Nawaz Sharif',
        b: 'Asif Zardari',
        c: 'Imran Khan',
        d: 'Maryam Nawaz',
        correct: 'c'
    },

    {
        question: 'What does HTML stand for?',
        a: 'HyperText Markup Language',
        b: 'Cascading Stylesheet',
        c: 'Preprocessor Language',
        d: 'JavaScript Object Notation',
        correct: 'a'
    },

    {
        question: 'Which is the most used programming language of 2020?',
        a: 'Java',
        b: 'JavaScript',
        c: 'C#',
        d: 'C++',
        correct: 'b'
    },

    {
        question: 'When JavaScript was launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'None of the above',
        correct: 'd'
    }
]

const quizContainer = document.getElementById('quiz');
const answersEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitButton');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    // Gets the first object of array
    const currentQuizData = quizData[currentQuiz];
   
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers(){
    answersEl.forEach((answersEl) => {
        answersEl.checked = false;
    })
}

function getSelected(){
    
    let answer = undefined;
    answersEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    
    if(answer){

        if(answer == quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2>You answered ${score}/${quizData.length} correctly</h2>
            
            <button id="submitButton" onclick="location.reload()">Reload</button>
            `;
        }
    }
})