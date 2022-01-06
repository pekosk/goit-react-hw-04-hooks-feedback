import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return (
        <ul className={styles.statList}>
            <li className={styles.statListItem}>
                <p className={styles.statText}>Good: {good}</p>
            </li>
            <li className={styles.statListItem}>
                <p className={styles.statText}>Neutral: {neutral}</p>
            </li>
            <li className={styles.statListItem}>
                <p className={styles.statText}>Bad: {bad}</p>
            </li>
            <li className={styles.statListItem}>
                <p className={styles.statText}>Total: {total}</p>
            </li>
            <li className={styles.statListItem}>
                <p className={styles.statText}>Positive feedback: {positivePercentage}%</p>
            </li>
    </ul>
 )
}

Statistics.prototype = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;