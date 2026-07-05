import PageLayout from '@/components/resuable-component/PageLayout';
import React from 'react';
import DealsDetails from './DealsDetails';
import MODULES from '@/config/ModuleData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Filter, Plus, Search, SlidersHorizontal } from 'lucide-react';
import { ButtonGroup } from '@/components/ui/button-group';

function Deals() {
  const { title, description } = MODULES.deals;

  return (
    <PageLayout
      title={title}
      description={description}
      actions={
        <div className="flex gap-2">
          <ButtonGroup>
            <Input placeholder="Search deals here..."></Input>
            <Button variant="outline">
              <Search />
            </Button>
          </ButtonGroup>
          <Button>
            <Plus />
            Add Deals
          </Button>
          <Button>
            <SlidersHorizontal />
          </Button>
        </div>
      }
    >
      <DealsDetails />
    </PageLayout>
  );
}

export default Deals;
