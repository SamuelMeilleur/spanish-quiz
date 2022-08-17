import React, { useState } from "react";

import { capitalizeWord } from "../../utils/formatting";

import './style.scss';


const GuessInput = props => {
  const { word, displayIsCorrect } = props;
  const [input, setInput] = useState('');

  const validate = () => {
    setInput(input.trim());
    if (!input.trim()) {
      return;
    }
    props.validate(input, word);
    setInput('')
  };

  const inputOnChange = event => {
    setInput(event.target.value);
  };

  const inputOnKeydown = event => {
    if (event.key === 'Enter') {
      validate();
    }
  };

  return (
    <div className="guess">
      <h4>{capitalizeWord(word.sp)}</h4> 
      <div>
        {displayIsCorrect()}
        <input value={input} onChange={inputOnChange} onKeyDown={inputOnKeydown} />
      </div>
    </div>
  );
}

export default GuessInput;
