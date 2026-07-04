import PageLayout from '@/components/resuable-component/PageLayout';
import { Button } from '@/components/ui/button';
import LeadsDetails from './LeadsDetails';
import MODULES from '@/config/ModuleData';

function Leads() {
  const { title, description } = MODULES.leads;

  return (
    <PageLayout
      title={title}
      description={description}
      actions={<Button>+ Add Lead</Button>}
    >
      <LeadsDetails />
    </PageLayout>
  );
}

export default Leads;
