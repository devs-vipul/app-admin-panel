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
import { packagesColumns } from "@/data/packages/columns";
import { packageTypes } from "@/data/packages";
import { CreatePackageForm } from "@/components/create-package-form";

const Packages = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(notifications, setNotifications, setIsLoading);

  const tabList = [
    {
      label: "Package List",
      value: "package_list",
    },
    {
      label: "Create Package",
      value: "create_package",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="package_list">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={packagesColumns}
              data={packageTypes}
            />
          )}
        </TabsContent>
        <TabsContent value="create_package">
          <CreatePackageForm />
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default Packages;
