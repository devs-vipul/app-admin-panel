import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-row">
      {" "}
      <SidebarProvider className="border-black bg-black">
        <AppSidebar />
        <SidebarTrigger className="absolute" />
      </SidebarProvider>
      <main className="w-full bg-black page-header-title">{children}</main>
    </div>
  );
};

export default DashboardLayout;
