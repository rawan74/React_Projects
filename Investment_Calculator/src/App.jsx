import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    // I wanna update this state based on the previous state value
    //     we should use this function form
    // for updating the state where we get the previous userInput
    // and where we then return our updated state object.
    // And I'll start by spreading the old userInput state object

    setUserInput((prevUserInput) => {
      // we can use this JavaScript syntax
      // to dynamically set a property
      // depending on which value is stored in inputIdentifier.
      // And I want to set that property of that name that's stored
      // in this parameter to this new value

      // we should simply add a plus in front of new value.
      // Because simply adding this plus here
      // will force a conversion of this string value
      // to a number value.
      return { ...prevUserInput, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
