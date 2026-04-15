import Button from '../Button.jsx/Button';
import Username from '../Username.jsx/Username';
import './WhoToFollow.css';

function WhoToFollow() {
  const suggestions = [
    { name: 'PMO India', handle: '@PMOIndia', avatar: null },
    { name: 'Kanhaiya Kumar', handle: '@kanhaiyakumar', avatar: null },
    { name: 'Vance Spencer', handle: '@pythianism', avatar: null }
  ];

  return (
    <div className="who-to-follow-card">
      <h2 className="card-title">You might like</h2>
      {suggestions.map((user, index) => (
        <div key={index} className="suggestion-item">
          <Username name={user.name} handle={user.handle} avatarUrl={user.avatar} />
          <Button variant="secondary" className="follow-btn">Follow</Button>
        </div>
      ))}
      <div className="show-more">Show more</div>
    </div>
  );
}

export default WhoToFollow;
