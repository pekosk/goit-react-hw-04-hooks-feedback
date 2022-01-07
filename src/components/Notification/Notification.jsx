import styles from "./Notification.module.css";
import PropTypes from "prop-types";
import { memo } from "react";

const Notification = ({ message }) => {
    return (
        <p className={styles.message}>{message}</p>
    )
}

Notification.proptype = {
    message: PropTypes.string.isRequired,
};

export default memo(Notification);