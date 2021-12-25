import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game'
import { Myquizzes } from "./assets/mock-data";

function App(props) {

  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [quizzes, setQuizzes] = useState([...Myquizzes]);
  const [answers, setAnswers] = useState([]);

  let firstQ = currentQuiz === 0;
  let lastQ = currentQuiz === quizzes.length-1;

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
    
  }

  return (
  <div className="App">
  <Game quiz={quizzes[currentQuiz]} 
    answer = {answers[currentQuiz]}
    save = {save}
    previous = {previous}
    next = {next}
  />
  </div>
  );
  }
  
export default App;
