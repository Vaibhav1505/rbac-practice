import { useState } from 'react';
import { Download, Plus } from 'lucide-react';
import MODULES from '@/config/ModuleData';
import PageLayout from '@/components/resuable-component/PageLayout';
import LeadsDetails from './LeadsDetails';
import LeadsDrawer from '@/components/LeadsDrawer';
import { Button } from '@/components/ui/button';

function Leads() {
  const { title, description } = MODULES.leads;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0); // bumping this can trigger a refetch in LeadsDetails

  return (
    <PageLayout
      title={title}
      description={description}
      actions={
        <div className='flex gap-2'>
          <Button onClick={() => setDrawerOpen(true)}>
          <Plus /> Add Lead
        </Button>
        <Button onClick={() => {}}>
          <Download /> Export
        </Button>
        </div>
      }
    >
      <LeadsDetails refreshKey={refreshKey} />

      <LeadsDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        onSuccess={() => setRefreshKey((prev) => prev + 1)}
      />
    </PageLayout>
  );
}

export default Leads;
