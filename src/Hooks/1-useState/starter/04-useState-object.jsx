import { useState } from 'react';
// מגדיר רכיב פונקציונלי בשם UseStateObject.

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'מיכאל',
    age: 24,
    hobby: 'לאכול פיצות',
  });

    // הגדרת מצב (state) באמצעות useState, שמחזיק אובייקט עם שלוש תכונות: 
  // 'name' (שם), 'age' (גיל), ו-'hobby' (תחביב). הערכים הראשוניים הם מיכאל (השם), 24 (הגיל), ו-"לאכול פיצות" (התחביב).
  // הפונקציה setPerson מאפשרת לעדכן את המצב (האובייקט person).

  const displayPerson = () => {
    setPerson({ name: 'דונטאלו', age: 28, hobby: 'מכין פיצות' });

  };


  // פונקציה בשם displayPerson אשר משנה את ערכי המצב (person) לאובייקט חדש, שבו השם הוא דונטאלו, הגיל הוא 28, והתחביב הוא "מכין פיצות". 

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