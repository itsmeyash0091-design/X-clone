import './Username.css';

function Username({ name, handle, avatarUrl }) {
  return (
    <div className="username-wrapper">
      {avatarUrl && (
        <img src={avatarUrl} alt={`${name}'s avatar`} className="username-avatar" />
      )}
      {!avatarUrl && <div className="username-avatar-placeholder"></div>}
      
      <div className="username-info">
        <span className="username-display">{name}</span>
        <span className="username-handle">{handle}</span>
      </div>
    </div>
  );
}

export default Username;
