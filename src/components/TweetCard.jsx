import { useState } from 'react';
import { MessageCircle, Repeat2, Heart, BarChart2, Share, MoreHorizontal } from 'lucide-react';

const TweetCard = ({ tweet, user }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(tweet.reactions?.likes || Math.floor(Math.random() * 100));
  const [retweeted, setRetweeted] = useState(false);
  const [retweets, setRetweets] = useState(Math.floor(Math.random() * 50));

  const handleLike = (e) => {
    e.preventDefault();
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleRetweet = (e) => {
    e.preventDefault();
    setRetweeted(!retweeted);
    setRetweets(retweeted ? retweets - 1 : retweets + 1);
  };

  const userName = user?.name || (user?.firstName ? `${user.firstName} ${user.lastName}` : 'X User');
  const userHandle = user?.handle || (user?.username ? `@${user.username}` : '@user');
  const userImage = user?.image || `https://ui-avatars.com/api/?name=${userName.replace(' ', '+')}&background=random`;

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-zinc-900/50 transition-colors cursor-pointer flex gap-4">
      <div className="flex-shrink-0">
        <img src={userImage} alt={userName} className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1 text-sm overflow-hidden">
            <span className="font-bold hover:underline truncate">{userName}</span>
            <span className="text-gray-500 truncate">{userHandle}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500 hover:underline">2h</span>
          </div>
          <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full group -mt-2 -mr-2">
            <MoreHorizontal size={18} className="text-gray-500 group-hover:text-blue-500" />
          </div>
        </div>
        <div className="mt-1 text-[15px] whitespace-pre-wrap">
          {tweet.body}
        </div>
        <div className="flex justify-between text-gray-500 mt-3 max-w-md">
          <div className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
            <div className="p-2 rounded-full group-hover:bg-blue-500 group-hover:bg-opacity-10 transition-colors -ml-2">
              <MessageCircle size={18} />
            </div>
            <span className="text-sm">{Math.floor(Math.random() * 50)}</span>
          </div>
          
          <div className={`flex items-center gap-2 group transition-colors ${retweeted ? 'text-green-500' : 'hover:text-green-500'}`} onClick={handleRetweet}>
            <div className="p-2 rounded-full group-hover:bg-green-500 group-hover:bg-opacity-10 transition-colors">
              <Repeat2 size={18} />
            </div>
            <span className="text-sm">{retweets}</span>
          </div>

          <div className={`flex items-center gap-2 group transition-colors ${liked ? 'text-pink-600' : 'hover:text-pink-600'}`} onClick={handleLike}>
            <div className="p-2 rounded-full group-hover:bg-pink-600 group-hover:bg-opacity-10 transition-colors">
              <Heart size={18} fill={liked ? "currentColor" : "none"} />
            </div>
            <span className="text-sm">{likes}</span>
          </div>

          <div className="flex items-center gap-2 group hover:text-blue-500 transition-colors hidden sm:flex">
            <div className="p-2 rounded-full group-hover:bg-blue-500 group-hover:bg-opacity-10 transition-colors">
              <BarChart2 size={18} />
            </div>
            <span className="text-sm">{tweet.views || Math.floor(Math.random() * 1000)}</span>
          </div>

          <div className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
            <div className="p-2 rounded-full group-hover:bg-blue-500 group-hover:bg-opacity-10 transition-colors">
              <Share size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
