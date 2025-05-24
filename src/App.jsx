import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/layout";
import Dashboard from "./pages/Dashboard";

import CompanySetupPage from "./pages/CompanySetupPage";
import AdminSetupPage from "./pages/AdminSetupPage";

import UserListPage from "./pages/user-management/page";
import CreateUserPage from "./pages/user-management/create/page";
import EditUserPage from "./pages/user-management/edit/[id]"; 

import TeamListPage from "./pages/team-management/page";
import CreateTeamPage from "./pages/team-management/create/page";
import EditTeamPage from "./pages/team-management/edit/[id]";

import ProjectListPage from "./pages/project-management/page";
import CreateProjectPage from "./pages/project-management/create/page";
import EditProjectPage from "./pages/project-management/edit/[id]";

import TaskListPage from "./pages/task-management/page";
import CreateTaskPage from "./pages/task-management/create/page";
import EditTaskPage from "./pages/task-management/edit/[id]";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without sidebar */}
        <Route path="/company-setup" element={<CompanySetupPage />} />
        <Route path="/admin-setup" element={<AdminSetupPage />} />

        {/* Routes with sidebar */}
        <Route element={<Layout />}>
          {/* Dashboard Routes*/}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* User Routes */}
          <Route path="/user-management" element={<UserListPage />} />
          <Route path="/user-management/create" element={<CreateUserPage />} />
          <Route path="/user-management/edit/:id" element={<EditUserPage />} />

          {/* Team Routes */}
          <Route path="/team-management" element={<TeamListPage />} />
          <Route path="/team-management/create" element={<CreateTeamPage />} />
          <Route path="/team-management/edit/:id" element={<EditTeamPage />} />

          {/* Project Routes */}
          <Route path="/project-management" element={<ProjectListPage />} />
          <Route path="/project-management/create" element={<CreateProjectPage />} />
          <Route path="/project-management/edit/:id" element={<EditProjectPage />} />

          {/* Task Routes */}
          <Route path="/task-management" element={<TaskListPage />} />
          <Route path="/task-management/create" element={<CreateTaskPage />} />
          <Route path="/task-management/edit/:id" element={<EditTaskPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
