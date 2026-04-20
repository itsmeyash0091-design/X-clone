import { Home, Search, User, Bell, Mail, Bookmark, FileText, MoreHorizontal } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { useUser } from '../context/UserContext';

const Sidebar = () => {
  const { user } = useUser();
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Explore', icon: Search, path: '/explore' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
    { name: 'Messages', icon: Mail, path: '/messages' },
    { name: 'Bookmarks', icon: Bookmark, path: '/bookmarks' },
    { name: 'Lists', icon: FileText, path: '/lists' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'More', icon: MoreHorizontal, path: '/more' },
  ];

  return (
    <div className="w-64 fixed h-screen border-r border-gray-800 p-4 flex flex-col hidden sm:flex">
      <div className="mb-4 p-3 hover:bg-gray-900 rounded-full w-fit cursor-pointer transition-colors">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 fill-current text-white"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 3.75H5.078z"></path></g></svg>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors w-fit text-xl ${
                isActive ? 'font-bold' : ''
              }`
            }
          >
            <item.icon size={28} />
            <span className="hidden xl:inline">{item.name}</span>
          </NavLink>
        ))}
        
        <button className="w-full xl:w-11/12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-full mt-4 transition-colors">
          <span className="hidden xl:inline">Post</span>
          <span className="xl:hidden">+</span>
        </button>
      </nav>

      <div className="mt-auto flex items-center gap-3 p-3 hover:bg-gray-900 rounded-full cursor-pointer transition-colors">
        <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full flex-shrink-0" />
        <div className="hidden xl:block flex-1 min-w-0">
          <p className="font-bold text-sm truncate">{user.name}</p>
          <p className="text-gray-500 text-sm truncate">{user.handle}</p>
        </div>
        <MoreHorizontal className="hidden xl:block" size={20} />
      </div>
    </div>
  );
};

export default Sidebar;
