import { useState } from "react";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}> open modal </button>
      {showModal ? <Modal onModalClose={closeModal} /> : null}
    </div>
  );
}

export default App;
