function Input({
  className: classes,
  defaultValue,
  name,
  onBlur,
  onChange,
  placeholder,
  style,
  type,
  value,
  ...otherProps
}) {
  return (
    <input
      className={`input ${classes}`}
      defaultValue={defaultValue}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
      type={type}
      value={value}
      {...otherProps}
    />
  );
}

export default Input;
