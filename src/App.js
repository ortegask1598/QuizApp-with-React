import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import Finished from './Finished'
import { Myquizzes } from "./assets/mock-data";

function App(props) {

  let [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzes, setQuizzes] = useState([...Myquizzes]);
  const [answers, setAnswers] = useState([]);

  let firstQ = currentQuiz === 0;
  let lastQ = currentQuiz === quizzes.length-1;

  /*const download = async () => {

    const res = await fetch('https://core.dit.upm.es/api/quizzes/random10wa?token=eb51f6091799a0f8dbac');
    let downloadedQuizzes = res.json();
    setQuizzes(...downloadedQuizzes);
  }*/

  const next = () => {
    setCurrentQuiz(lastQ ? currentQuiz : currentQuiz + 1);
    console.log({answers});
  }

  const previous = () => {
    setCurrentQuiz(firstQ ? 0 : currentQuiz - 1);
  }

  const save = () => {
    answers[currentQuiz] = document.getElementById("answer").value;
    //setAnswers({...answers, [currentQuiz]: document.getElementById("answer").value});
    }

  const submit = () => {
    const puntuacion = 0;
    const soluciones = quizzes.map(quiz => quiz.answer.trim().toUpperCase());
    const respuestas = answers.map(ans => ans.trim().toUpperCase());
    //solución fácil, hacer un bucle for ==> intentar hacer una solución más óptima 
    console.log(soluciones);
    console.log(respuestas);
    for(let i=0;i <quizzes.length;i++){
      let check = soluciones[i]===respuestas[i];
      check ? setScore(score++) : setScore(score);
      console.log(check);
      console.log(score);
    }   
    setFinished(true);
  }

 /* useEffect(() => {
    async function fetchData() {
      try {
        await download();
      }catch(e){
        alert("Error en la descarga");
      }
    }
    fetchData();
  }, []);*/

  return (
  finished ? <div className='App'>  <Finished finished = {finished} score = {score}/></div> :  <div className="App">
  <Game quiz={quizzes[currentQuiz]} 
    answer = {answers[currentQuiz]}
    save = {save}
    previous = {previous}
    next = {next}
    submit = {submit}
    finished = {finished}
  />

  </div>
  );
  }
  
export default App;

