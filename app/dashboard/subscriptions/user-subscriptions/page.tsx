"use client";

import { useState } from "react";
// import { ListFilter } from "@/components/list-filter";
// import PageDataCounter from "@/components/page-data-counter";
import PageTabs from "@/components/page-tabs";
// import Searchbar from "@/components/searchbar";
import TableInfoSection from "@/components/table-info-section";
import { TabsContent } from "@/components/ui/tabs";
// import { notificationColumns } from "@/data/notifications/columns";
import { notificationTypes } from "@/data/notifications";
// import { CreateNotificationForm } from "@/components/create-notification-form";
// import { packagesColumns } from "@/data/packages/columns";
// import { packageTypes } from "@/data/packages";
// import { CreatePackageForm } from "@/components/create-package-form";
import { CreateUserSubscriptionPlanForm } from "@/components/create-user-subscription-plan-form";
import { subscriptionTypes } from "@/data/subscriptions/users";
import { subscriptionsColumns } from "@/data/subscriptions/users/columns";

const UserSubscriptions = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(notifications, setNotifications, setIsLoading);
  const tabList = [
    {
      label: "User's Plan List",
      value: "user_plan_list",
    },
    {
      label: "Create Plan",
      value: "create_plan",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="user_plan_list">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={subscriptionsColumns}
              data={subscriptionTypes}
            />
          )}
        </TabsContent>
        <TabsContent value="create_plan">
          <CreateUserSubscriptionPlanForm />
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default UserSubscriptions;
