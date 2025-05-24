// src/layouts/Layout.jsx

import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Outlet /> {/* This will render the nested route */}
      </div>
    </div>
  );
}
