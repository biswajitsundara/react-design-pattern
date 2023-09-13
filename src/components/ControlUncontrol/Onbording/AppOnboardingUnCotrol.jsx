import { useState } from "react";
import UncontrolledOnboradingFlow from "./UncontrolledOnboradingFlow";

const StepOne = ({ goToNext }) => {
  return(<>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "John Doe" })}>Next</button>
  </>);
};

const StepTwo = ({ goToNext }) => {
    return(<>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 100 })}>Next</button>
  </>);
};

const StepThree = ({ goToNext }) => {
    return(<>
    <h1>Step 3</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>);
};

const AppOnboarding = () => {
  
  return (
    <UncontrolledOnboradingFlow
      onFinish={(data) => {
        console.log(data);
        alert("on boarding finished");
      }}
    >
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboradingFlow>
  );
};

export default AppOnboarding;
