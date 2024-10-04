import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import './sidebarComponent.css';
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat'; // Icon for chat history items

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true); // Toggle collapsed state

  const handleLinkClick = () => {
    setCollapsed(true); // Auto collapse the sidebar after clicking a link
  };

  return (
    <Sidebar
      collapsed={collapsed} // Collapse the sidebar when state is true
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'black',
          color: 'white',
          height: '100vh',
          borderRight: 'none', // Ensure there's no border-right (fix white line)
          margin: 0,           // Ensure there's no margin
        },
      }}
    >
      <div className="toggle-button" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? <ArrowForwardIosIcon style={{ color: 'white' }} /> : <ArrowBackIosIcon style={{ color: 'white' }} />}
      </div>
      <Menu
        menuItemStyles={{
          button: {
            color: 'white',
            '&:hover': {
              backgroundColor: '#333', // Hover effect for MenuItems
            },
          },
          subMenuContent: {
            backgroundColor: 'black', // Ensure submenu has a black background
            color: 'white',
          },
        }}
      >
        <SubMenu label="Agents" icon={<AccountCircleIcon />} style={{ backgroundColor: 'black', color: 'white' }}>
          <MenuItem icon={<DashboardIcon />} component={<Link to="/dashboard" onClick={handleLinkClick} />}>Agent 1</MenuItem>
          <MenuItem icon={<DashboardIcon />} component={<Link to="/dashboard" onClick={handleLinkClick} />}>Agent 2</MenuItem>
          <MenuItem icon={<DashboardIcon />} component={<Link to="/dashboard" onClick={handleLinkClick} />}>Agent 3</MenuItem>
        </SubMenu>

        <SubMenu label="Chat History" icon={<HistoryIcon />} style={{ backgroundColor: 'black', color: 'white' }}>
          <div className="chat-history">
            <MenuItem icon={<ChatIcon />} component={<Link to="/dashboard" onClick={handleLinkClick} />}>Chat 1</MenuItem>
            <MenuItem icon={<ChatIcon />} component={<Link to="/dashboard" onClick={handleLinkClick} />}>Chat 2</MenuItem>
            <MenuItem icon={<ChatIcon />} component={<Link to="/dashboard" onClick={handleLinkClick} />}>Chat 3</MenuItem>
            {/* Add more chat items */}
          </div>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;