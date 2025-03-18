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
// import { subscriptionsColumns } from "@/data/subscriptions/users/columns";
// import { subscriptionTypes } from "@/data/subscriptions/users";
// import { CreateUserSubscriptionPlanForm } from "@/components/create-user-subscription-plan-form";
import { CreateCoachSubscriptionPlanForm } from "@/components/create-coach-subscription-plan-form";
import { coachSubscriptionTypes } from "@/data/subscriptions/coach";
import { coachSubscriptionsColumns } from "@/data/subscriptions/coach/columns";

const CoachSubscriptions = () => {
  const [notifications, setNotifications] = useState(notificationTypes);
  const [isLoading, setIsLoading] = useState(false);
  console.log(notifications, setNotifications, setIsLoading);

  const tabList = [
    {
      label: "Coach's Plan List",
      value: "coach_plan_list",
    },
    {
      label: "Create Plan",
      value: "create_plan",
    },
  ];

  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 py-4">
      <PageTabs tabs={tabList}>
        <TabsContent className="w-full" value="coach_plan_list">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <TableInfoSection
              tableTitle=""
              columns={coachSubscriptionsColumns}
              data={coachSubscriptionTypes}
            />
          )}
        </TabsContent>
        <TabsContent value="create_plan">
          <CreateCoachSubscriptionPlanForm />
        </TabsContent>
      </PageTabs>
    </div>
  );
};

export default CoachSubscriptions;
