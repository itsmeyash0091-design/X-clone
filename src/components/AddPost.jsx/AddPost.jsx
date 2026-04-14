import './AddPost.css';

function AddPost() {
  return (
    <div className="post-container">
      <div className="post-box">
        
        <div className="profile-circle"></div>

        <form className="post-form">
          <textarea
            placeholder="What's happening?"
            className="post-content"
          ></textarea>

          <button type="submit" className="post-btn">
            Post
          </button>
        </form>

      </div>
    </div>
  );
}

export default AddPost;