import React from 'react';

export default function Game(props) {
    return (
    <>
    <div>{props.quiz.question}</div>
    <img src={props.quiz.attachment.url} />
    <input  type="text" id="answer" placeholder="Answer"></input>
    <img src={props.quiz.author.photo.url} />
    <h1> {props.quiz.author.username} </h1>
    <button className="guardar" onClick={props.save}>Guardar mi respuesta</button>
    <button className="anterior" onClick={props.previous}>Anterior</button>
    <button className="enviar" onClick={props.submit}>Enviar</button>
    <button className="siguiente" onClick={props.next}>Siguiente</button>

    </>
    );
}
    