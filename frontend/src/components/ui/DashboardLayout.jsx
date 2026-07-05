import AppSidebar from './AppSidebar';
import { SidebarProvider, SidebarInset } from './sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default DashboardLayout;