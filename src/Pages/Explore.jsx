import { useState } from 'react';
import { Search, Settings } from 'lucide-react';

const Explore = () => {
  const [activeTab, setActiveTab] = useState('For you');
  
  const trends = [
    { category: 'Trending in Technology', topic: 'React 19', posts: '125K', type: 'Trending' },
    { category: 'Trending', topic: 'Tailwind CSS', posts: '45.2K', type: 'Trending' },
    { category: 'Sports · Trending', topic: 'Champions League', posts: '1.2M', type: 'Sports' },
    { category: 'Trending in India', topic: 'Vite', posts: '12.4K', type: 'Trending' },
    { category: 'Entertainment · Trending', topic: 'Dune: Part Two', posts: '345K', type: 'Entertainment' },
    { category: 'Trending in Programming', topic: 'JavaScript', posts: '89K', type: 'News' },
  ];

  const filteredTrends = activeTab === 'For you' 
    ? trends 
    : trends.filter(t => t.type === activeTab);

  return (
    <div className="w-full">
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 p-4 flex gap-4 items-center">
        <div className="bg-gray-900 rounded-full flex items-center p-2 flex-1 focus-within:bg-black focus-within:ring-1 focus-within:ring-blue-500 focus-within:text-blue-500">
          <Search size={20} className="text-gray-500 min-w-[20px] ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none ml-4 w-full text-white placeholder-gray-500"
          />
        </div>
        <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors">
          <Settings size={20} />
        </div>
      </div>

      <div className="border-b border-gray-800">
        <div className="flex overflow-x-auto no-scrollbar">
          {['For you', 'Trending', 'News', 'Sports', 'Entertainment'].map((tab) => (
            <div 
              key={tab} 
              className="px-6 py-4 hover:bg-gray-900 transition-colors cursor-pointer relative whitespace-nowrap"
              onClick={() => setActiveTab(tab)}
            >
              <span className={activeTab === tab ? "font-bold text-white" : "font-medium text-gray-500"}>{tab}</span>
              {activeTab === tab && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="relative w-full h-64 bg-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
            alt="Cybersecurity" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-sm font-semibold">Technology · LIVE</p>
            <h2 className="text-2xl font-bold mt-1">The future of Web Development</h2>
          </div>
        </div>

        {filteredTrends.map((trend, index) => (
          <div key={index} className="px-4 py-3 hover:bg-zinc-900/50 transition-colors cursor-pointer border-b border-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-gray-500">{trend.category}</p>
                <p className="font-bold text-lg mt-0.5">{trend.topic}</p>
                <p className="text-sm text-gray-500 mt-1">{trend.posts} posts</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
