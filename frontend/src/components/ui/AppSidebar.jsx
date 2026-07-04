import AuthContext from '@/context/AuthContext';
import { useContext } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from './sidebar';
import UserAvatar from '../resuable-component/UserAvatar';
import { Button } from './button';
import { NavLink } from 'react-router-dom';
import {
  Ad,
  Handshake,
  Headset,
  MailPlus,
  Settings,
  Users,
  LogOut,
} from 'lucide-react';

function AppSidebar() {
  const { hasPermission, user, logout } = useContext(AuthContext);

  const ALL_MODULES = [
    { key: 'leads', icon: Headset, label: 'Leads', path: '/leads' },
    { key: 'deals', icon: Handshake, label: 'Deals', path: '/deals' },
    { key: 'campaigns', icon: Ad, label: 'Campaigns', path: '/campaigns' },
    {
      key: 'email_templates',
      icon: MailPlus,
      label: 'Email Templates',
      path: '/email-templates',
    },
    {
      key: 'settings',
      icon: Settings,
      label: 'Settings',
      path: '/settings',
    },
    {
      key: 'users',
      icon: Users,
      label: 'Manage Users',
      path: '/manage-users',
    },
  ];

  const allowedModules = ALL_MODULES.filter((module) =>
    hasPermission(module.key),
  );

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="border-b px-4 py-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">RBAC Project</h2>
          <p className="text-sm text-gray-500">Access control panel</p>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarMenu className="space-y-2">
          {allowedModules.map((mod) => {
            const Icon = mod.icon;

            return (
              <SidebarMenuItem key={mod.key}>
                <SidebarMenuButton asChild>
                  <NavLink
                    to={mod.path}
                    className={({ isActive }) =>
                      `group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={18}
                          className={`shrink-0 ${
                            isActive
                              ? 'text-white'
                              : 'text-gray-500 group-hover:text-gray-900'
                          }`}
                        />
                        <span className="truncate">{mod.label}</span>
                      </>
                    )}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="border-t px-3 py-4">
        <div className=" rounded-xl bg-gray-50">
          <UserAvatar user={user} />
        </div>

        <Button
          onClick={logout}
          variant="outline"
          className="flex w-full items-center justify-center gap-2 rounded-xl"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
