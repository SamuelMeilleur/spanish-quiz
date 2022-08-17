import { useState } from 'react';

import Game from './components/Game';
import SideMenu from './components/SideMenu';
import { CATEGORIES } from './utils/constants';
import data from './data/words.json';

import './Layout.scss';


function App() {
  const [category, setCategory] = useState(CATEGORIES.VERBS);

  console.log(category);

  return (
    <>
      <header className="header">
        <h3 className="title">
          Spanish Quiz
        </h3>
      </header>
      <div className='content'>
        <SideMenu 
          categories={CATEGORIES} 
          setCategory={setCategory}
        />
        <Game 
          data={data}
          category={category}
        />
      </div>
    </>
  );
}

export default App;
