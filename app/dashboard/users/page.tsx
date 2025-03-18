"use client";

import PageTabs from "@/components/page-tabs";
import TableInfoSection from "@/components/table-info-section";
import { TabsContent } from "@/components/ui/tabs";
import { notificationTypes } from "@/data/notifications";
import { userTypes } from "@/data/users";
import { usersColumns } from "@/data/users/columns";
import { useState } from "react";

const Users = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(notifications, setNotifications, setIsLoading);
  const tabList = [
    {
      label: "All Users",
      value: "all_users",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="all_users">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={usersColumns}
              data={userTypes}
            />
          )}
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default Users;
