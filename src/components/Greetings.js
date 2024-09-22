import { useState } from 'react';
import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    if (!changedText) {
      setChangedText(true);
    } else {
      setChangedText(false);
    }
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {changedText ? <Output>Changed!</Output> : <Output>It is good to see you</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
