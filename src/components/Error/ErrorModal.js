import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./ErrorModal.module.css";

// in this modal template, the app is rendering the modal side by side with the form
// so, aiming to improve this, we can create portals, wich can prioritize the overlays (improving the screen readers, for example)
// this way, the overlays will be above, side by side with root
const ErrorModal = (props) => {
  return (
    <Wrapper>
      <div className={styles.backdrop} onClick={props.onConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
