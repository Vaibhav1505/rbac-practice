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
import { Link } from 'react-router-dom';
import {
  Ad,
  Handshake,
  Headset,
  MailPlus,
  Settings,
  Users,
} from 'lucide-react';

function AppSidebar() {
  const { hasPermission, user, logout } = useContext(AuthContext);

  const ALL_MODULES = [
    { key: 'leads', icon: <Headset />, label: 'Leads', path: '/leads' },
    { key: 'deals', icon: <Handshake />, label: 'Deals', path: '/deals' },
    { key: 'campaigns', icon: <Ad />, label: 'Campaigns', path: '/campaigns' },
    {
      key: 'email_templates',
      icon: <MailPlus />,
      label: 'Email Templates',
      path: '/email-templates',
    },
    {
      key: 'settings',
      icon: <Settings />,
      label: 'Settings',
      path: '/settings',
    },
    {
      key: 'users',
      icon: <Users />,
      label: 'Manage Users',
      path: '/admin/create-user',
    },
  ];

  const allowedModules = ALL_MODULES.filter((module) =>
    hasPermission(module.key),
  );

  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <p>RBAC Project</p>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {allowedModules.map((mod) => (
              <SidebarMenuItem key={mod.key}>
                <SidebarMenuButton asChild>
                  <Link className='flex items-center gap-2' to={mod.path}>{mod.icon}<span>{mod.label}</span></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <UserAvatar user={user} />
          <Button onClick={logout}>Logout</Button>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}

export default AppSidebar;
