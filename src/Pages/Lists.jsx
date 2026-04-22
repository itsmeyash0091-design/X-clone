import { ArrowLeft, MoreHorizontal, FileText, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Lists = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen">
      <div className="sticky top-0 bg-black bg-opacity-80 backdrop-blur-md z-10 flex items-center gap-6 p-2 px-4 border-b border-gray-800">
        <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Lists</h1>
          <p className="text-sm text-gray-500">@currentuser</p>
        </div>
        <div className="flex gap-2">
          <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors">
            <Plus size={20} />
          </div>
          <div className="p-2 hover:bg-gray-900 rounded-full cursor-pointer transition-colors">
            <MoreHorizontal size={20} />
          </div>
        </div>
      </div>

      <div className="p-4 border-b border-gray-800">
        <h2 className="text-xl font-bold mb-4">Pinned Lists</h2>
        <p className="text-gray-500 text-sm text-center py-6">
          Nothing to see here yet — pin your favorite Lists to access them quickly.
        </p>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Your Lists</h2>
        <p className="text-gray-500 text-sm text-center py-6">
          You haven't created or followed any Lists. When you do, they'll show up here.
        </p>
      </div>
    </div>
  );
};

export default Lists;
