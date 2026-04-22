import { 
  BarChart2, 
  MessageSquare, 
  User, 
  Settings, 
  HelpCircle,
  Briefcase,
  Smartphone,
  ExternalLink
} from 'lucide-react';

const More = () => {
  const menuItems = [
    { icon: BarChart2, label: 'Analytics' },
    { icon: Briefcase, label: 'X for Business' },
    { icon: ExternalLink, label: 'Ads' },
    { icon: Settings, label: 'Settings and privacy' },
    { icon: HelpCircle, label: 'Help Center' },
    { icon: Smartphone, label: 'Display' },
  ];

  return (
    <div className="w-full min-h-screen p-4">
      <h1 className="text-xl font-bold mb-6">More options</h1>
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-4 hover:bg-gray-900 rounded-xl cursor-pointer transition-colors">
            <item.icon size={24} className="text-gray-400" />
            <span className="text-lg font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default More;
