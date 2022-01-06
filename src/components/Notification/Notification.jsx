import styles from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
    return (
        <p className={styles.message}>{message}</p>
    )
}

Notification.proptype = {
    message: PropTypes.string.isRequired,
};

export default Notification;