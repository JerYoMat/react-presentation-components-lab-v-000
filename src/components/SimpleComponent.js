import React, { useState } from "react";


function SimpleComponent() {
  const [mood, setMood] = useState('happy');

  /**
   * return new mood based on previous mood
   */
  const calcMood = (prevMood) => {
    const newMood = prevMood === 'happy'
      ? 'sad'
      : 'happy' ;
    return newMood;
  };

  /**
   * return function to set mood on click
   */
  const setMoodOnClick = () => setMood(calcMood(mood));
  
  return (
    <div onClick={setMoodOnClick}>
      {mood}
    </div>
  );
}
export default SimpleComponent; 