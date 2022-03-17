import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import Input from "../common/Input";

function FormField({
  className: classes = "",
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
      <Input
        className="input-form"
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="Enter you name here"
        value={values[name]}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </div>
  );
}

export default FormField;
