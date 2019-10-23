import React from 'react';
import './App.css';

function Helloworld(props){
  return(
    <div id ="hello">
    <h2>{props.subtitulo}</h2>
    {props.mitexto}
    </div>  );
}



function App() {
  return (
    <div>este es mi componente: 
      <Helloworld mitexto="hola elias" subtitulo="yusti"/>
      <Helloworld mitexto="hola pablo" subtitulo="puerta"/></div>
  );
}

export default App;
