const myH1 = document.querySelector('.title')
const pickSubject = document.querySelector('.choice')
const mySection = document.querySelector('.welcome')
const htmlHeader = document.querySelector('.topic.html')
const choices = document.querySelectorAll('.subject')
const choice = document.querySelectorAll('.option')
const topicIcon = document.querySelectorAll('.subject-icon')
const submitBtn = document.querySelector('.btn')
const myAnswer = document.querySelectorAll('.topic')
const header = document.querySelector('header')
let count = 0;

async function populate() {
  const response = await fetch("data.json")
  const result = await response.json();

  let questions = (result.quizzes[0].questions)
  let questionOneOptions = (result.quizzes[0].questions[0].options)
  
   for (let i = 0; i<questions.length; i++){
   console.log(result.quizzes[0].questions[i].options)
  }

  /* for (let i = 0; i<questions.length; i++){
    myPara.textContent = questions[i]
  }*/
   
  /*for (let i = 0; i<questionOneOptions.length; i++){
    console.log(questionOneOptions[i])
  }*/
  
  myH1.classList.add('hidden')
  pickSubject.classList.add('hidden')
  let question1 = result.quizzes[0].questions[0].question
  let num = 1;
  const questionNum = document.createElement('p')
  questionNum.classList.add('questionNum')
  questionNum.textContent = `Question ${num} of 10`
  const myPara = document.createElement('p')
  mySection.appendChild(questionNum)
  mySection.appendChild(myPara)
  myPara.classList.add('questionStyle')
  myPara.textContent = question1

  submitBtn.classList.remove('hidden')
  
  for (let i = 0; i < myAnswer.length; i++) {
    myAnswer[i].addEventListener('click', ()=>{
      choice[i].classList.add('blueBg')
      myAnswer[i].classList.add('blueBord')
      count++;
    })
  } 



  for (let i = 0; i < topicIcon.length; i++) {
    topicIcon[i].classList.add('hidden')
  }

  for (let i = 0; i < choice.length; i++) {
    choice[i].classList.remove('hidden')

  }

  for (let i = 0; i < choices.length; i++) {
    choices[i].textContent = questionOneOptions[i]
  }

  // console.log(result.quizzes[0].questions[0])
}

let answer;
populate()













function generateHtml(obj) {
  let questions = obj.quizzes[0].questions
  let question1 = obj.quizzes[0].questions[0].question
  let num = 1;
  const questionNum = document.createElement('p')
  questionNum.classList.add('choice')
  questionNum.textContent = `Question ${num} of 10`
  const myPara = document.createElement('p')
  myPara.textContent = question1

  for (let i = 0; i < choices.length; i++) {
    choices[i].textContent = questionOneOptions[i]
  }


}





