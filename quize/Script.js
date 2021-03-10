const quizDB =[
    {
        question:  "1 - Which of the following is correct about features of JavaScript?",  
    
    A: "JavaScript is a lightweight, interpreted programming language.",
    
    B: "JavaScript is designed for creating network-centric applications.",
    
    C: "JavaScript is complementary to and integrated with Java.",
    
        D: "All of the above.",
        ans : "ans4"
    },
    {
        question:"2- Which of the following type of variable is visible only within a function where it is defined?" ,
    
    A: "global variable",
    
    B: "local variable",
    
    C: "Both of the above.",
    
        D: "None of the above.",
        ans : "ans2"
    },
    {
        question: "3 - Which built-in method reverses the order of the elements of an array?",
    
    A: "changeOrder(order)",
    
    B: "reverse()",
    
    C: "sort(order)",
    
        D: "None of the above.",
        ans : "ans2"
    },
    {
        question: "4 - Which of the following function of Array object extracts a section of an array and returns a new array?",
    
    A: "reverse()",
    
    B: "shift()",
    
    C: "slice()",
    
        D: "some()",
        ans : "ans3"
    }
];
    

const question = document.querySelector('.question');
const ops1 = document.querySelector('#ops1');
const ops2 = document.querySelector('#ops2');
const ops3 = document.querySelector('#ops3');
const ops4 = document.querySelector('#ops4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;
    ops1.innerHTML = questionList.A;
    ops2.innerHTML = questionList.B;
    ops3.innerHTML = questionList.C;
    ops4.innerHTML = questionList.D;
 
}
loadQuestion();

const getCheckAnswer = () => {
    let answerD;
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answerD = curAnsElem.id;
        }
    })
    return answerD;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false;
    })
}



submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)
    if (checkedAnswer ===  quizDB[questionCount].ans) {
        score++;
    };
    
    questionCount++;
    deselectAll();
    
    if (questionCount< quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
        <h3> Your Scored ${score}/${quizDB.length} ✌️</h3>
        <button class="btn" onClick="location.reload()" >Play Again </button>
        `;
        showScore.classList.remove('scoreArea')
    }
});


