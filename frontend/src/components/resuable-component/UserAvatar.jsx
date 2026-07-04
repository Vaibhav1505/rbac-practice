import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

function UserAvatar({ user }) {
  const name = user?.name || 'User';
  const email = user?.email || 'No email';
  const image = user?.image || '';

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex w-full items-center gap-3 rounded-xl px-3 py-3">
      <Avatar className="h-11 w-11 shrink-0">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-blue-600 text-white font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-gray-900">{name}</p>
        <p className="truncate text-xs text-gray-500">{email}</p>
      </div>
    </div>
  );
}

export default UserAvatar;