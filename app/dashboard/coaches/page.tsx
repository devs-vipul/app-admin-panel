"use client";

import React, { useState } from "react";
// import { ListFilter } from "@/components/list-filter";
// import PageDataCounter from "@/components/page-data-counter";
import PageTabs from "@/components/page-tabs";
// import Searchbar from "@/components/searchbar";
import TableInfoSection from "@/components/table-info-section";
import { TabsContent } from "@/components/ui/tabs";
// import { notificationColumns } from "@/data/notifications/columns";
import { notificationTypes } from "@/data/notifications";
// import { CreateNotificationForm } from "@/components/create-notification-form";
// import { enquiryColumns } from "@/data/enquiries/columns";
// import { enquiryTypes } from "@/data/enquiries";
// import { usersColumns } from "@/data/users/columns";
// import { userTypes } from "@/data/users";
import { coachesColumns } from "@/data/coaches/columns";
import { coachesTypes } from "@/data/coaches";

const Coaches = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(notifications, setNotifications, setIsLoading);
  const tabList = [
    {
      label: "All Coaches",
      value: "all_coaches",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="all_coaches">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={coachesColumns}
              data={coachesTypes}
            />
          )}
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default Coaches;
