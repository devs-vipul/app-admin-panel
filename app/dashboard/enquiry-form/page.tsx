"use client";

import PageTabs from "@/components/page-tabs";
import TableInfoSection from "@/components/table-info-section";
import { TabsContent } from "@/components/ui/tabs";
import { enquiryTypes } from "@/data/enquiries";
import { enquiryColumns } from "@/data/enquiries/columns";
import { notificationTypes } from "@/data/notifications";
import { useState } from "react";

const Enquiries = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(notifications, setNotifications, setIsLoading);

  const tabList = [
    {
      label: "Enquiries",
      value: "enquiries",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="enquiries">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={enquiryColumns}
              data={enquiryTypes}
            />
          )}
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default Enquiries;
