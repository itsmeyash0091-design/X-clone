import './Button.css';

function Button({ children, onClick, variant = 'primary', className = '', type = 'button' }) {
  return (
    <button type={type} className={`x-button ${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
