import { toast, Toaster } from 'sonner';
import { Button } from './components/ui/button';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Login />
      <Toaster></Toaster>
    </>
  );
}

export default App;
