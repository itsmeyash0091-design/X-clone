import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';
import Notifications from './Pages/Notifications';
import Messages from './Pages/Messages';
import Bookmarks from './Pages/Bookmarks';
import Lists from './Pages/Lists';
import More from './Pages/More';
import { UserProvider } from './context/UserContext';
import './index.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path="lists" element={<Lists />} />
            <Route path="more" element={<More />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<div className="p-4 text-center">404 - Page Not Found</div>} />
          </Route>
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
