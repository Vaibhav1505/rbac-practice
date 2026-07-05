import KpiCard from '@/components/resuable-component/KpiCard';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { LEADS } from '@/config/apiStrings';
import axiosInstance from '@/config/axiosInstance';
import { UserCheck, UserMinus, UserPlus, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

function LeadsDetails() {
  const [leads, setLeads] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    getLeads;
  }, []);

  const getLeads = () => {
    try {
      const response = axiosInstance.get(LEADS.GET_ALL);
      setLeads(response.data.leads);
      toast.success(response.data.message || 'Leads fetched');
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message || 'Unable to fetch Leads!');
    }
  };

  const demoKPIData = {
    totalLeads: {
      label: 'Total Leads',
      value: '80',
      icon: <Users size={20} />,
      valueFromPrevious: '34.4',
    },
    newLead: {
      label: 'New Leads',
      value: '8.6',
      icon: <UserPlus size={20} />,
      valueFromPrevious: '6',
    },
    qualifiedLeads: {
      label: 'Qualified Leads',
      value: '3',
      icon: <UserCheck size={20} />,
      valueFromPrevious: '60',
    },
    lostLeads: {
      label: 'Lost Leads',
      value: '26',
      icon: <UserMinus size={20} />,
      valueFromPrevious: '62',
    },
  };

  return (
    <div>
      <div className="flex gap-3">
        {Object.values(demoKPIData).map((data, index) => (
          <KpiCard className="flex-1" key={index} data={data} />
        ))}
      </div>
      <div>
        {/* leads details table */}
        <Card>
          <CardHeader></CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
}

export default LeadsDetails;
