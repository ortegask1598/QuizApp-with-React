import React from 'react';

export default function Game(props) {
    
    return (
    <>
    <div>{props.quiz.question}</div>
    <img src={props.quiz.attachment.url ? props.quiz.attachment.url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.teepublic.com%2Fes-mx%2Fpegatina%2F7791716-nani-anime-meme&psig=AOvVaw0kov2LyQzJTbzd9fCKadvK&ust=1640599821519000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQkuKcgfUCFQAAAAAdAAAAABAD'} />
    <input  type="text" id="answer" placeholder="Answer"></input>
    <img src={props.quiz.author.photo.url ? props.quiz.author.photo.url : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.esquire.com%2Fes%2Factualidad%2Ftv%2Fg38201395%2Fmejores-animes-dibujos-japoneses-netflix%2F&psig=AOvVaw3Xfl6CS8JgQeDdwZ3f3V_X&ust=1640599716596000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjC2rWcgfUCFQAAAAAdAAAAABAE'} />
    <h1> {props.quiz.author.username} </h1>
    <button className="guardar" onClick={props.save}>Guardar mi respuesta</button>
    <button className="anterior" onClick={props.previous}>Anterior</button>
    <button className="enviar" onClick={props.submit}>Enviar</button>
    <button className="siguiente" onClick={props.next}>Siguiente</button>

    </>
    );
}
   
