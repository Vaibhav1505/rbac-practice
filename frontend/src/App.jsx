import { Toaster } from 'sonner';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import UnauthorizedPage from './pages/UnauthorizedPage';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import DashboardLayout from './components/ui/DashboardLayout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout/>}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
      <Toaster></Toaster>
    </>
  );
}

export default App;
