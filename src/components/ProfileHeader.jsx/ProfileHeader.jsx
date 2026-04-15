import './ProfileHeader.css';

function ProfileHeader() {
  return (
    <div className="profile-header">
      <div className="profile-top-bar">
        <span className="back-arrow">←</span>
        <div className="top-bar-info">
          <h2>Ved Rai</h2>
          <span>3 posts</span>
        </div>
      </div>

      <div className="cover-photo"></div>

      <div className="profile-info-section">
        <div className="profile-actions">
          <div className="large-avatar">
            <span>V</span>
          </div>
          <button className="edit-profile-btn">Edit profile</button>
        </div>

        <div className="user-details">
          <h2>Ved Rai <span className="verified-badge">Get verified</span></h2>
          <span className="handle">@VedRai337113</span>
          <p className="join-date">📅 Joined March 2024</p>
          
          <div className="follow-stats">
            <span><strong>48</strong> Following</span>
            <span><strong>1</strong> Follower</span>
          </div>
        </div>

        <div className="profile-tabs">
          <div className="tab active">Posts</div>
          <div className="tab">Replies</div>
          <div className="tab">Highlights</div>
          <div className="tab">Articles</div>
          <div className="tab">Media</div>
          <div className="tab">Likes</div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
