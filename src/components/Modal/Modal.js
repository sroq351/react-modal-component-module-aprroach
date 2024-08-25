import styles from "./Modal.module.css";

export const Modal = (props) => {
  const handleClick = () => props.onModalClose();

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3> Modal Title </h3>
        <p> description </p>
        <button onClick={handleClick}> Close</button>
      </div>
    </div>
  );
};
