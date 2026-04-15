import { Button, AddPost, WhoToFollow, SidebarItem, ProfileHeader } from './components/index.js';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div style={{ padding: '12px', fontSize: '30px', fontWeight: 'bold' }}>𝕏</div>
        <SidebarItem text="Home" />
        <SidebarItem text="Explore" />
        <SidebarItem text="Notifications" />
        <SidebarItem text="Chat" />
        <SidebarItem text="Profile" isActive={true} />
        <SidebarItem text="More" />
        
        <div style={{ marginTop: '16px', paddingRight: '20px' }}>
          <Button variant="primary" style={{ width: '100%', height: '52px', fontSize: '17px' }}>
            Post
          </Button>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="main-content">
        <ProfileHeader />
        
        {/* We place the AddPost here as a mock feed item for now */}
        <div style={{ padding: '16px', borderBottom: '1px solid #2f3336' }}>
          <AddPost />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div style={{ 
          backgroundColor: '#202327', 
          borderRadius: '9999px', 
          padding: '12px 20px', 
          marginBottom: '20px',
          color: '#71767b'
        }}>
          🔍 Search
        </div>
        
        <WhoToFollow />
      </div>
    </div>
  );
}

export default App;
