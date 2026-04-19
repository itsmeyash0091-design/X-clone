import { Search, MoreHorizontal } from 'lucide-react';

const RightSidebar = () => {
  const trends = [
    { category: 'Trending in World', topic: 'Global Warming', posts: '2.5M' },
    { category: 'Entertainment · Trending', topic: '#Oppenheimer', posts: '1.1M' },
    { category: 'Sports · Trending', topic: 'Lionel Messi', posts: '850K' },
    { category: 'Trending in India', topic: 'Chandrayaan 4', posts: '150K' },
    { category: 'Technology · Trending', topic: 'Artificial Intelligence', posts: '1.8M' },
  ];

  return (
    <div className="hidden lg:block w-80 ml-8 py-2 sticky top-0 h-screen overflow-y-auto overflow-x-hidden no-scrollbar">
      <div className="sticky top-0 bg-black pt-1 pb-3 z-10">
        <div className="bg-gray-900 rounded-full flex items-center p-3 focus-within:bg-black focus-within:ring-1 focus-within:ring-blue-500 focus-within:text-blue-500">
          <Search size={20} className="text-gray-500 min-w-[20px]" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none ml-4 w-full text-white placeholder-gray-500"
          />
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-4 my-4">
        <h2 className="font-bold text-xl mb-2">Subscribe to Premium</h2>
        <p className="text-sm mb-3">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Subscribe
        </button>
      </div>

      <div className="bg-gray-900 rounded-xl pt-4 my-4">
        <h2 className="font-bold text-xl px-4 mb-4">What's happening</h2>
        {trends.map((trend, index) => (
          <div key={index} className="px-4 py-3 hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500">{trend.category}</p>
                <p className="font-bold mt-0.5">{trend.topic}</p>
                <p className="text-xs text-gray-500 mt-1">{trend.posts} posts</p>
              </div>
              <div className="p-1 hover:bg-blue-500 hover:bg-opacity-10 rounded-full group">
                <MoreHorizontal size={18} className="text-gray-500 group-hover:text-blue-500" />
              </div>
            </div>
          </div>
        ))}
        <div className="px-4 py-4 hover:bg-gray-800 transition-colors cursor-pointer rounded-b-xl text-blue-500 text-sm">
          Show more
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
