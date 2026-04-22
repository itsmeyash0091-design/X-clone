import { useState, useEffect } from 'react';
import TweetInputBox from '../components/TweetInputBox';
import TweetCard from '../components/TweetCard';

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('for-you');

  const filteredTweets = activeTab === 'for-you' ? tweets : tweets.slice(0, 10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch('https://dummyjson.com/posts?limit=30'),
          fetch('https://dummyjson.com/users?limit=100')
        ]);
        
        const postsData = await postsRes.json();
        const usersData = await usersRes.json();
        
        const userMap = {};
        usersData.users.forEach(user => {
          userMap[user.id] = {
            ...user,
            name: `${user.firstName} ${user.lastName}`,
            handle: `@${user.username}`
          };
        });
        
        setUsers(userMap);
        setTweets(postsData.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewPost = (text) => {
    const newTweet = {
      id: Date.now(),
      body: text,
      userId: 0,
      reactions: { likes: 0 },
      views: 0
    };
    
    if (!users[0]) {
      setUsers({
        ...users,
        0: {
          id: 0,
          firstName: 'Current',
          lastName: 'User',
          username: 'currentuser',
          image: 'https://ui-avatars.com/api/?name=Current+User&background=random'
        }
      });
    }

    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="w-full">
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 border-b border-gray-800">
        <h1 className="text-xl font-bold p-4">Home</h1>
        <div className="flex border-b border-gray-800">
          <div 
            className="flex-1 text-center py-4 hover:bg-gray-900 transition-colors cursor-pointer relative"
            onClick={() => setActiveTab('for-you')}
          >
            <span className={`font-bold ${activeTab === 'for-you' ? 'text-white' : 'text-gray-500'}`}>For you</span>
            {activeTab === 'for-you' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
            )}
          </div>
          <div 
            className="flex-1 text-center py-4 hover:bg-gray-900 transition-colors cursor-pointer relative"
            onClick={() => setActiveTab('following')}
          >
            <span className={`font-bold ${activeTab === 'following' ? 'text-white' : 'text-gray-500'}`}>Following</span>
            {activeTab === 'following' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
            )}
          </div>
        </div>
      </div>

      <TweetInputBox onPost={handleNewPost} />

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="pb-20 sm:pb-0">
          {filteredTweets.map(tweet => (
            <TweetCard key={tweet.id} tweet={tweet} user={users[tweet.userId]} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
