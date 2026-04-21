import { useState } from 'react';
import { Image, FileJson, List, Smile, Calendar, MapPin } from 'lucide-react';

const TweetInputBox = ({ onPost }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    if (onPost) {
      onPost(text);
    }
    setText('');
  };

  return (
    <div className="border-b border-gray-800 p-4 flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What is happening?!"
            className="w-full bg-transparent text-xl outline-none resize-none min-h-[60px] placeholder-gray-500 mt-2"
            rows="2"
          />
          
          <div className="border-t border-gray-800 pt-3 mt-2 flex justify-between items-center">
            <div className="flex text-blue-500 gap-1 sm:gap-2">
              <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full cursor-pointer transition-colors">
                <Image size={20} />
              </div>
              <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full cursor-pointer transition-colors hidden sm:block">
                <FileJson size={20} />
              </div>
              <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full cursor-pointer transition-colors hidden sm:block">
                <List size={20} />
              </div>
              <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full cursor-pointer transition-colors">
                <Smile size={20} />
              </div>
              <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full cursor-pointer transition-colors hidden sm:block">
                <Calendar size={20} />
              </div>
              <div className="p-2 hover:bg-blue-500 hover:bg-opacity-10 rounded-full cursor-pointer transition-colors hidden sm:block">
                <MapPin size={20} />
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!text.trim()}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-4 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetInputBox;
