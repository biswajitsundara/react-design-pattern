import ControlledModal from "./ControlledModal";
import { useState } from "react";

const ModalAppCtrl = () => {
  const [shouldShow, setShouldShow] = useState(false);

  const toggleModal = () => {
    setShouldShow(!shouldShow);
  };

  return (
    <>
      <ControlledModal
        shouldShow={shouldShow}
        onRequestClose={() => setShouldShow(false)}
      />
      <button onClick={toggleModal}>
        {shouldShow ? "HideModal" : "Show Modal"}
      </button>
    </>
  );
};

export default ModalAppCtrl;
