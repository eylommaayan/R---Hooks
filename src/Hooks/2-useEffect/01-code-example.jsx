import { useEffect, useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);
const [secondValu, setSecondValue] = useState(0);

useEffect(() => {
  console.log('שלום מ-useEffect הראשון');
}, [value])

useEffect(() => {
  console.log('שלום מ-useEffect השני');
}, [secondValu])



  return (
    <div>
      <h1>ערך : {value}</h1>
      <button className='btn' onClick={() => setValue(setValue + 1)}>
      לחץ
      </button>
      <h1>ערך שני: {value}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValu + 1)}>
לחץ
      </button>
    </div>
  );
};
export default CodeExample;