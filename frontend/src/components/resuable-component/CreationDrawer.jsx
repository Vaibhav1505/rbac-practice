import { useState, useEffect } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '../../components/ui/drawer';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Label } from '../../components/ui/label';
import { Cross, Plus, X } from 'lucide-react';
import { Spinner } from '../ui/spinner';

function CreationDrawer({
  open,
  onOpenChange,
  title,
  description,
  fields,
  onSubmit,
  submitLabel = 'Create',
}) {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  // Reset form whenever the drawer opens fresh
  useEffect(() => {
    if (open) setValues({});
  }, [open]);

  const handleChange = (fieldName, value) => {
    setValues((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit(values);
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Drawer swipeDirection="right" open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>

        <div className="px-4 space-y-4 py-6">
          {fields.map((field) => (
            <div key={field.name} className="space-y-1.5">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                type={field.type || 'text'}
                placeholder={field.placeholder}
                value={values[field.name] || ''}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            </div>
          ))}
        </div>

        <DrawerFooter>
          <div className="flex  justify-between gap-3">
            <Button
              className="flex-1"
              onClick={handleSubmit}
              disabled={loading}
            >
              <Plus />
              {loading ? <Spinner /> : submitLabel}
            </Button>
            <DrawerClose asChild>
              <Button className='flex-1' variant="outline">
                <X /> Cancel
              </Button>
            </DrawerClose>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CreationDrawer;
