"use client";

import React, { useState } from "react";
// import { ListFilter } from "@/components/list-filter";
// import PageDataCounter from "@/components/page-data-counter";
import PageTabs from "@/components/page-tabs";
// import Searchbar from "@/components/searchbar";
import TableInfoSection from "@/components/table-info-section";
import { TabsContent } from "@/components/ui/tabs";
import { notificationColumns } from "@/data/notifications/columns";
import { notificationTypes } from "@/data/notifications";
import { CreateNotificationForm } from "@/components/create-notification-form";

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(setIsLoading, setNotifications);

  const tabList = [
    {
      label: "Sent",
      value: "sent",
    },
    {
      label: "Create",
      value: "create",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="sent">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={notificationColumns}
              data={notifications}
            />
          )}
        </TabsContent>
        <TabsContent value="create">
          <CreateNotificationForm />
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default Notifications;
