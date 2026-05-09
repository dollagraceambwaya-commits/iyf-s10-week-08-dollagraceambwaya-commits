import "./Button.css";

function Button({
  text = "Click Me",
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
  loading = false,
}) {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? <span className="spinner"></span> : text}
    </button>
  );
}

export default Button;
