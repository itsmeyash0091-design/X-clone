import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Link as LinkIcon } from 'lucide-react';
import TweetCard from '../components/TweetCard';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user } = useUser();
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserTweets = async () => {
      try {
        const res = await fetch('https://dummyjson.com/posts/user/1?limit=10');
        const data = await res.json();
        setTweets(data.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user tweets:', error);
        setLoading(false);
      }
    };

    fetchUserTweets();
  }, []);

  return (
    <div className="w-full">
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 flex items-center gap-6 p-2 px-4">
        <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors" onClick={() => window.history.back()}>
          <ArrowLeft size={20} />
        </div>
        <div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-gray-500">{tweets.length} posts</p>
        </div>
      </div>

      <div>
        <div className="h-48 w-full bg-gray-800">
          <img src={user.coverImage || 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?auto=format&fit=crop&q=80&w=1000'} alt="Cover" className="w-full h-full object-cover" />
        </div>

        <div className="px-4 pb-4">
          <div className="flex justify-between items-start">
            <div className="-mt-16 w-32 h-32 rounded-full border-4 border-black overflow-hidden bg-gray-800">
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <button className="mt-3 px-4 py-1.5 rounded-full border border-gray-500 font-bold hover:bg-gray-900 transition-colors">
              Edit profile
            </button>
          </div>

          <div className="mt-3">
            <h1 className="text-xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.handle}</p>
          </div>

          <p className="mt-3 text-[15px]">{user.bio}</p>

          <div className="flex gap-4 mt-3 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon size={16} />
              <a href={`https://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>{user.joined}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4 text-sm">
            <div className="hover:underline cursor-pointer">
              <span className="font-bold text-white">{user.following}</span> <span className="text-gray-500">Following</span>
            </div>
            <div className="hover:underline cursor-pointer">
              <span className="font-bold text-white">{user.followers}</span> <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-800">
        {['Posts', 'Replies', 'Highlights', 'Articles', 'Media', 'Likes'].map((tab, i) => (
          <div key={tab} className="flex-1 text-center py-4 hover:bg-gray-900 transition-colors cursor-pointer relative whitespace-nowrap">
            <span className={i === 0 ? "font-bold text-white" : "font-medium text-gray-500"}>{tab}</span>
            {i === 0 && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="pb-20 sm:pb-0">
          {tweets.map(tweet => (
            <TweetCard key={tweet.id} tweet={tweet} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
