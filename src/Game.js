import React from 'react';

export default function Game(props) {
    //TODO condición para las fotos
    return (
    <>
    <div>{props.quiz.question}</div>
    <img src={(props.quiz.attachment) ? props.quiz.attachment.url : 'https://images5.memedroid.com/images/UPLOADED2/50dda4c4d2e08.jpeg'} />
    <input  type="text" id="answer" placeholder="Answer"></input>
    <img src={(props.quiz.author) ? props.quiz.author.photo.url : 'https://es.web.img3.acsta.net/r_654_368/newsv7/19/01/15/15/29/1148475.jpg'} />
    <h1> {props.quiz.author.username} </h1>
    <button className="guardar" onClick={props.save}>Guardar mi respuesta</button>
    <button className="anterior" onClick={props.previous}>Anterior</button>
    <button className="enviar" onClick={props.submit}>Enviar</button>
    <button className="siguiente" onClick={props.next}>Siguiente</button>

    </>
    );
}
    
