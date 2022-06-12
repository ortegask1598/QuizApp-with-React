import * as React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Tictactoe from './routes/Tictactoe';
import Quiz from './routes/Quiz';
import Home from './routes/Home';


export default function App() {
  return (
    <>
    <h1>Mis Juegos</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/tictactoe">TicTacToe</Link> |{' '}
        <Link to="/quiz">Quiz</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="tictactoe" element={<Tictactoe />} />
      <Route path="quiz" element={<Quiz />} />
    </Routes>
    </>
  );
}