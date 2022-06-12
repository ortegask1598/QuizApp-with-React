import React from 'react';

export default function Game(props) {
    return (
    <>
    <div className='pregunta'>{props.quiz.question}</div>
    <div className='separador1'></div>
    <img className='fotoquiz' src={(props.quiz.attachment) ? props.quiz.attachment.url : 'https://images5.memedroid.com/images/UPLOADED2/50dda4c4d2e08.jpeg'} />
    <div className='separador1'></div>
    <input  type="text" id="answer" placeholder="Answer"></input>
    <img className='fotoautor' src={(props.quiz.author) ? props.quiz.author.photo.url : 'https://es.web.img3.acsta.net/r_654_368/newsv7/19/01/15/15/29/1148475.jpg'} />
    <h1 className='autor'> {props.quiz.author.username ? props.quiz.author.username : 'Anónimo'} </h1>
    <div className='contenedorbotones'>
        <button className="guardar" onClick={props.save}>Guardar mi respuesta</button>
        <button className="anterior" onClick={props.previous}>Anterior</button>
        <button className="siguiente" onClick={props.next}>Siguiente</button>
        <button className="enviar" onClick={props.submit}>Enviar</button>

    </div>
    </>
    );
}
    