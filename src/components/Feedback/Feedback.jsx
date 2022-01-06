import styles from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ options, onLeaveFeedback }) => {
  const button = options.map(button => (
    <li key={button} className={styles.listItem}>
      <button className={styles.feedbackBtn} type="button" value={button} onClick={onLeaveFeedback}>
        {button}
      </button>
    </li>
  ));
    return (
        <ul className={styles.btnList}>
            {button}
        </ul>
    )
};

Feedback.proptype = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};

export default Feedback;
