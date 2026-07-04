import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function UserAvatar({ user }) {
  return (
    <div className="flex w-full items-center gap-4 py-2">
      <Avatar size='lg'>
        <AvatarImage src="https://imgs.search.brave.com/kloi-zWWknKoraC1e4fDjSEu4hcqeFKE8mTITnb7fCM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/NTA4ODA0My92ZWN0/b3IvdXNlci1wcm9m/aWxlLWljb24tYXZh/dGFyLW9yLXBlcnNv/bi1pY29uLXByb2Zp/bGUtcGljdHVyZS1w/b3J0cmFpdC1zeW1i/b2wtZGVmYXVsdC1w/b3J0cmFpdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZGhW/MnAxSndtbG9CVE9h/R0F0YUEzQVcxS1Nu/anNkTXQ3LVVfM0Va/RWxaMD0" />
        <AvatarFallback>{user.name}</AvatarFallback>
        <p className='text-sm'>{user.name}</p>
      </Avatar>
    </div>
  );
}

export default UserAvatar;
