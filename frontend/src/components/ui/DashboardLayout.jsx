import React from 'react';
import AppSidebar from './AppSidebar';
import { SidebarProvider, SidebarTrigger } from './sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-6">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default DashboardLayout;
