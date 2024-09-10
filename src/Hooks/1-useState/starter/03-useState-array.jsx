import React from 'react';
import { data } from '../../../../data';
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

   // הגדרת state (מצב) בשם people שמכיל את המערך הראשוני `data` שהבאנו קודם. 
  // הפונקציה `setPeople` משמשת לעדכון של ה-state בהמשך.

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

    // פונקציה `removeItem` שמקבלת מזהה (id) ומסננת את הרשימה (people) כך שהאובייקט עם המזהה המתאים יוסר.
  // הפונקציה משתמשת ב-filter כדי ליצור מערך חדש שמכיל את כל האנשים חוץ מזה עם ה-id שצוין. 
  // לאחר מכן, `setPeople` מעדכן את המצב עם הרשימה החדשה.
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>לביוב</button>
          </div>
        );
      })}
      <button
        className='btn'
        style={{ marginTop: '2rem' }}
        onClick={() => setPeople([])}
      >
       לנצח את שרדגר
      </button>
    </div>
  );
};

export default UseStateArray;