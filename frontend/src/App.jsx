import { Toaster } from 'sonner';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import UnauthorizedPage from './pages/UnauthorizedPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import DashboardLayout from './components/ui/DashboardLayout';
import Leads from './pages/Leads/Leads';
import Deals from './pages/Deals/Deals';
import Campaigns from './pages/Campaigns/Campaigns';
import EmailTemplates from './pages/Email-Template/EmailTemplates';
import Settings from './pages/Settings/Settings';
import Users from './pages/Manage-Users/Users';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route element={<ProtectedRoute />}>
          
          <Route element={<DashboardLayout/>}>
          <Route path='/profile' element={<Profile/>}/>
            <Route path="/" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/email-templates" element={<EmailTemplates />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/manage-users" element={<Users />} />

          </Route>
        </Route>
      </Routes>
      <Toaster></Toaster>
    </>
  );
}

export default App;
