import { FaHome, FaBuilding, FaUserShield, FaCog, FaTasks, FaBell } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoFolderOpen } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "User Management", path: "/user-management", icon: <FaUsers /> },
    { name: "Team Management", path: "/team-management", icon: <RiTeamFill /> },
    { name: "Project Management", path: "/project-management", icon: <IoFolderOpen /> },
    { name: "Task Management", path: "/task-management", icon: <FaTasks /> },
    { name: "Reminders & Escalations", path: "/reminders-and-escalation", icon: <FaBell /> },
    { name: "Reports & Analytics", path: "/reports-and-analytics", icon: <TbReportSearch /> }
  ];

  return (
    <div className="h-screen w-1/5 bg-[#FBFBFB] text-[#5686E1] flex flex-col shadow-lg">
      <div className="text-2xl font-bold p-4 border-b">
        Task Manager
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map(({ name, path, icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition hover:bg-[#B3B2B2] hover:text-[#F1EDED] hover:font-semibold ${
                isActive ? "bg-[#F1EDED] font-semibold" : ""
              }`
            }
          >
            {icon}
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
