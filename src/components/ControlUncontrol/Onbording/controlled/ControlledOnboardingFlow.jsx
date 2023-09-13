import React from "react";

const ControlledOnboardingFlow = ({
  children,
  currentIndex,
  onNext,
}) => {
  const goToNext = (stepData) => {
    //console.log("Calling goToNext");
    onNext(stepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];
  //console.log("Current Child:", currentChild);

  if (React.isValidElement(currentChild)) {
    //console.log("Valid React Element:", currentChild);
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default ControlledOnboardingFlow;
