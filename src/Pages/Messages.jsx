import { Search, Settings, Mail, MessageSquarePlus } from 'lucide-react';

const Messages = () => {
  const chats = [
    { id: 1, name: 'Avery Perez', handle: '@averyp', lastMsg: 'Hey, did you see the new React update?', time: '2h', image: 'https://i.pravatar.cc/150?u=avery' },
    { id: 2, name: 'Levi Hicks', handle: '@levih', lastMsg: 'The CSS is looking sharp!', time: '5h', image: 'https://i.pravatar.cc/150?u=levi' },
    { id: 3, name: 'Jordan Smith', handle: '@jordan', lastMsg: 'Let me know when you are free.', time: '1d', image: 'https://i.pravatar.cc/150?u=jordan' },
  ];

  return (
    <div className="w-full flex h-screen">
      <div className="w-full border-r border-gray-800 flex flex-col">
        <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Messages</h1>
          <div className="flex gap-2">
            <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors">
              <Settings size={20} />
            </div>
            <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors text-blue-500">
              <MessageSquarePlus size={20} />
            </div>
          </div>
        </div>

        <div className="px-4 py-2">
          <div className="bg-gray-900 rounded-full flex items-center p-2 focus-within:bg-black focus-within:ring-1 focus-within:ring-blue-500">
            <Search size={18} className="text-gray-500 ml-2" />
            <input
              type="text"
              placeholder="Search Direct Messages"
              className="bg-transparent border-none outline-none ml-4 w-full text-sm text-white placeholder-gray-500"
            />
          </div>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto">
          {chats.map(chat => (
            <div key={chat.id} className="p-4 hover:bg-white hover:bg-opacity-[0.03] transition-colors cursor-pointer flex gap-3">
              <img src={chat.image} alt={chat.name} className="w-12 h-12 rounded-full" />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 items-center overflow-hidden">
                    <span className="font-bold truncate text-[15px]">{chat.name}</span>
                    <span className="text-gray-500 truncate text-[15px]">{chat.handle}</span>
                    <span className="text-gray-500 text-[15px]">·</span>
                    <span className="text-gray-500 text-[15px]">{chat.time}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-[15px] truncate">{chat.lastMsg}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
