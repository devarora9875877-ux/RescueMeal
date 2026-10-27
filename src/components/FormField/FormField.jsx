import "./FormField.css";

function FormField({ label, name, type = "text", value, onChange, placeholder, error, className }) {
  return (
    <label className={className} htmlFor={name}>
      {label}
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        aria-invalid={Boolean(error)}
        aria-describedby={error ? name + "-error" : undefined}
      />
      {error && <span className="form-field-error" id={name + "-error"}>{error}</span>}
    </label>
  );
}

export default FormField;
