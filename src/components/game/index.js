import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import shuffle from 'lodash/shuffle';
import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';
import { GrPowerReset } from 'react-icons/gr';

import GuessInput from '../GuessInput';
import { capitalizeWord } from '../../utils/formatting';

import './style.scss';

const Game = props => {
  const { data, category } = props;

  const [words, setWords] = useState(shuffle(data[category]))
  const [wordIndex, setWordIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    reset();
  }, [category]);

  const validate = (input, word) => {
    const valid = input.toLocaleLowerCase() === word.en.toLocaleLowerCase()
    setIsCorrect(valid)
    if (!valid) {
      setErrors([...errors, wordIndex]);
    }
    setWordIndex(wordIndex + 1)
  };

  const reset = () => {
    setWordIndex(0);
    setIsCorrect(null);
    setErrors([]);
    setWords(shuffle(data[category]));
  };

  const displayIsCorrect = () => {
    if (isCorrect === null) {
      return <span className="answer"/>;
    }
    return (
      <span className="answer">
        {isCorrect ? "✔️" : "❌"}
      </span>
    );
  };

  return (
    <div className="game">
      <div className="counter">{`${wordIndex - errors.length}/${words.length}`}</div>
      {wordIndex < words.length ? (
        <GuessInput
          word={words[wordIndex]}
          validate={validate}
          displayIsCorrect={displayIsCorrect}
        />
      ) : (
        <>
          <div className="answers">
            {words.map((word, i) => (
              <Tooltip 
                key={i}
                title={capitalizeWord(word.en)}
                placement="top"
                arrow
                enterDelay={250}
                enterNextDelay={250}
                leaveDelay={150}
                components={{
                  Transition: Fade
                }}
              >
                <span className={cx("answer", errors.includes(i) ? 'error' : 'correct')}>
                  {capitalizeWord(word.sp)}
                </span>
              </Tooltip>
            ))}
          </div>
        <GrPowerReset 
          className="reset"
          onClick={() => reset()}
          style={{ color: 'white' }}
        />
      </>
      )}
    </div>
  );
};

export default Game;
