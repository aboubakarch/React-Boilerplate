function Select({
  className: classes,
  defaultValue,
  children,
  name,
  onBlur,
  onChange,
  placeholder,
  style,
  value,
  ...otherProps
}) {
  return (
    <select
      name={name}
      className={`input ${classes}`}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      {...otherProps}
    >
      {children}
    </select>
  );
}

export default Select;
