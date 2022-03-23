import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = [
  'Levar os filhos à escola',
  'Estudar', 'Fazer almoço',
  'Assistir à aula da Trybe',
  'Estudar mais!'
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <section>
          <h3>Tarefas:</h3>
          <ul>{ tarefas.map((tarefa) => Task(tarefa)) }</ul>
        </section>  
      </header>
    </div>
    );
  }
}

export default App;
