import CreationDrawer from '@/components/resuable-component/CreationDrawer';
import { LEADS } from '@/config/apiStrings';
import axiosInstance from '@/config/axiosInstance';
import { toast } from 'sonner';

const LEAD_FIELDS = [
  { name: 'name', label: 'Name', placeholder: 'John Doe' },
  { name: 'company', label: 'Company', placeholder: 'Acme Inc' },
  {
    name: 'description',
    label: 'Description',
    placeholder: 'This is description of lead',
  },
  { name: 'contact', label: 'Contact', placeholder: 'XXXX-XXXX-XX' },
];

function LeadsDrawer({ open, onOpenChange, onSuccess }) {
  const handleCreateLead = async (values) => {
    try {
      await axiosInstance.post(LEADS.CREATE, values);
      toast.success('Lead created!');
      onSuccess?.();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create lead');
      throw error; // re-throw so CreationDrawer knows NOT to close on failure
    }
  };

  return (
    <CreationDrawer
      open={open}
      onOpenChange={onOpenChange}
      title="Add Lead"
      description="Create a new lead record"
      fields={LEAD_FIELDS}
      submitLabel="Create Lead"
      onSubmit={handleCreateLead}
    />
  );
}

export default LeadsDrawer;
