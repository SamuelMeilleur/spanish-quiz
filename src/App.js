import Game from './components/game';
import data from './data/words.json';

import './App.scss';


function App() {
  return (
    <>
      <header className="App-header">
        <h3 className="title">
          Spanish Quiz
        </h3>
      </header>
      <Game words={data.actions} />
    </>
  );
}

export default App;
