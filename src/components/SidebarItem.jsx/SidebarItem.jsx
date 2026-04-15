import './SidebarItem.css';

function SidebarItem({ text, Icon, isActive }) {
  return (
    <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
      <div className="sidebar-item-content">
        {Icon ? <Icon className="sidebar-icon" /> : <div className="sidebar-icon-placeholder" />}
        <span className="sidebar-text">{text}</span>
      </div>
    </div>
  );
}

export default SidebarItem;
