import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';

const Layout = () => {
  return (
    <div className="flex justify-center min-h-screen bg-black text-white w-full mx-auto max-w-[1265px]">
      <div className="w-20 sm:w-64 flex-shrink-0">
        <Sidebar />
      </div>
      
      <main className="flex-1 min-w-0 max-w-[600px] border-x border-gray-800">
        <Outlet />
      </main>

      <div className="hidden lg:block w-[350px]">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;
