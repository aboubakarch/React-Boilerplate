import { useFormikContext } from "formik";
import PropTypes from "prop-types";

import "../config/styles/style.scss";

const SubmitButton = ({
  children,
  className: classes = "",
  style,
  type = "primary",
  ...otherProps
}) => {
  const { handleSubmit } = useFormikContext() || {};

  const btnClasses = `btn ${
    type === "secondary" ? "btn-secondary" : "btn-primary"
  } ${classes}`;

  return (
    <button
      className={btnClasses}
      onClick={handleSubmit}
      style={style}
      {...otherProps}
    >
      {children}
    </button>
  );
};

SubmitButton.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
};

export default SubmitButton;
