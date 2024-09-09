import { useState } from "react";
// Imports the useState function from React. This function allows us to use state in functional components.

const UseStateBasics = () => { 
  // Defines a functional component named UseStateBasics. This component will return the JSX (HTML-like structure) that we want to display.

  const [count, setCount] = useState(0); 
  // We use useState to define a state variable called count. 
  // The initial value of count is 0. 
  // setCount is a function that will be used to update the value of count.

  const handleClick = () => {
    setCount(count + 1);
  };
  // This function is called whenever the button is clicked.
  // Each time it runs, it increases the value of count by one using setCount.

  return (
    <div>
      <h1>לחצת מספר  {count} פעמים</h1>
     

      <button type="button" className="btn" onClick={handleClick}>
     מה אתה לחוץ??
      </button>
    
    </div>
  )
};

export default UseStateBasics; 
// Exports the component so that it can be used in other parts of the project.
