import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Input from "../common/Input";
import Select from "../common/Select";

function FormSelect({
  className: classes = "",
  children,
  name,
  placeholder,
  style,
  type,
  ...otherProps
}) {
  const {
    handleBlur,
    handleChange,
    errors = {},
    touched = {},
    values = {},
  } = useFormikContext() || {};
  return (
    <div>
      <Select
        className="input-form"
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter you name here"
        value={values[name]}
        {...otherProps}
      >
        {children}
      </Select>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormSelect;
