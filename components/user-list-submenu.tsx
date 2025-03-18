"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/data/messages/user-messages";

interface UserListSubmenuProps {
  users: User[];
  activeUserId: string;
  onUserSelect: (userId: string) => void;
}

const UserListSubmenu: React.FC<UserListSubmenuProps> = ({
  users,
  activeUserId,
  onUserSelect,
}) => {
  return (
    <div className="flex flex-col h-full border-r border-zinc-800">
      <p className="p-4 text-custom-gold text-sm font-semibold border-b border-white">
        My Messages (<span>{users.length}</span>)
      </p>
      <div className="flex flex-col">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onUserSelect(user.id)}
            className={cn(
              "border border-[#737373] flex items-center gap-3 p-4 hover:bg-zinc-900 transition-colors text-left border-r-2",
              activeUserId === user.id
                ? "border-r-custom-gold bg-zinc-900"
                : "border-r-transparent"
            )}
          >
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="text-sm">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">
                {user.name}
              </span>
              <span className="text-xs text-zinc-400">{user.subtitle}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserListSubmenu;
