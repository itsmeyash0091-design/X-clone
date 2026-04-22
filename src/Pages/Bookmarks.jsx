import { MoreHorizontal } from 'lucide-react';

const Bookmarks = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 p-4 border-b border-gray-800">
        <h1 className="text-xl font-bold">Bookmarks</h1>
        <p className="text-sm text-gray-500">@currentuser</p>
      </div>

      <div className="flex flex-col items-center justify-center p-10 mt-10 text-center max-w-sm mx-auto">
        <h2 className="text-3xl font-bold mb-2">Save posts for later</h2>
        <p className="text-gray-500 mb-6">Don’t let the good ones cause you to lose track. Bookmark posts to easily find them again in the future.</p>
      </div>
      
      <div className="p-4 border-t border-gray-800 text-center text-gray-500">
        Your bookmarked posts will appear here.
      </div>
    </div>
  );
};

export default Bookmarks;
