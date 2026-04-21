import { useState } from 'react';
import { Settings, Heart, User, MessageSquare, Repeat2 } from 'lucide-react';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'like',
      user: { name: 'Avery Perez', image: 'https://i.pravatar.cc/150?u=avery' },
      content: 'liked your post',
      text: 'Building a responsive X clone with React and Tailwind!',
      icon: Heart,
      iconColor: 'text-pink-600',
      iconFill: 'fill-pink-600'
    },
    {
      id: 2,
      type: 'follow',
      user: { name: 'Jordan Smith', image: 'https://i.pravatar.cc/150?u=jordan' },
      content: 'followed you',
      icon: User,
      iconColor: 'text-blue-500',
      iconFill: 'fill-blue-500'
    },
    {
      id: 3,
      type: 'retweet',
      user: { name: 'Taylor Reed', image: 'https://i.pravatar.cc/150?u=taylor' },
      content: 'reposted your post',
      text: 'React 19 is amazing! #webdev',
      icon: Repeat2,
      iconColor: 'text-green-500'
    },
    {
      id: 4,
      type: 'mention',
      user: { name: 'Casey Moon', image: 'https://i.pravatar.cc/150?u=casey' },
      content: 'mentioned you',
      text: '@currentuser Have you tried the new Tailwind CSS v4 yet?',
      icon: MessageSquare,
      iconColor: 'text-blue-500'
    }
  ];

  const filteredNotifications = activeTab === 'All' 
    ? notifications 
    : activeTab === 'Mentions' 
      ? notifications.filter(n => n.type === 'mention')
      : [];

  return (
    <div className="w-full">
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-xl font-bold">Notifications</h1>
        <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors">
          <Settings size={20} />
        </div>
      </div>

      <div className="flex border-b border-gray-800">
        {['All', 'Verified', 'Mentions'].map((tab) => (
          <div 
            key={tab} 
            className="flex-1 text-center py-4 hover:bg-gray-900 transition-colors cursor-pointer relative"
            onClick={() => setActiveTab(tab)}
          >
            <span className={activeTab === tab ? "font-bold text-white" : "font-medium text-gray-500"}>{tab}</span>
            {activeTab === tab && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      <div>
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => (
            <div key={notif.id} className="p-4 border-b border-gray-800 hover:bg-white hover:bg-opacity-[0.03] transition-colors cursor-pointer flex gap-3">
              <div className="flex-shrink-0 pt-1">
                <notif.icon className={`${notif.iconColor} ${notif.iconFill || ''}`} size={28} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <img src={notif.user.image} alt={notif.user.name} className="w-8 h-8 rounded-full" />
                </div>
                <div className="text-[15px]">
                  <span className="font-bold">{notif.user.name}</span> {notif.content}
                </div>
                {notif.text && (
                  <div className="text-gray-500 mt-2 text-[15px]">
                    {notif.text}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            {activeTab === 'Verified' ? 'Nothing to see here yet from verified accounts.' : 'No notifications yet.'}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notifications;
