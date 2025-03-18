"use client";

import PageHeader from "@/components/page-header";
import UserChatWindow from "@/components/user-chat-window";
import UserListSubmenu from "@/components/user-list-submenu";
import { users } from "@/data/messages/user-messages";
import { Bell } from "lucide-react";
import React, { useState } from "react";

const CoachInbox = () => {
  const [activeUserId, setActiveUserId] = useState<string>(users[0].id);

  const activeUser = users.find((user) => user.id === activeUserId);
  return (
    <section>
      <div className="border-b border-b-white pr-4 flex flex-row items-center justify-between">
        <PageHeader title={"Coach Inbox"} />
        <div className="bg-custom-dark rounded-md cursor-pointer p-3">
          <Bell className="h-4 w-4 text-custom-gold" />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="w-[40%]">
          <UserListSubmenu
            users={users}
            activeUserId={activeUserId}
            onUserSelect={setActiveUserId}
          />
        </div>
        <div className="w-full">
          <UserChatWindow activeUser={activeUser} />
        </div>
      </div>
    </section>
  );
};

export default CoachInbox;
