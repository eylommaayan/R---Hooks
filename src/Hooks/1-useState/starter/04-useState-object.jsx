import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'מיכאל',
    age: 24,
    hobby: 'לאכול פיצות',
  });

  const displayPerson = () => {
    setPerson({ name: 'דונטאלו', age: 28, hobby: 'מכין פיצות' });

  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>אוהב: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
       הראה את הצבים
      </button>
    </>
  );
};

export default UseStateObject;