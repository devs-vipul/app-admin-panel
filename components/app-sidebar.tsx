import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/config/sidebar-data";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-col gap-10 px-6 py-2">
            <div className="flex flex-row gap-2 cursor-pointer">
              <Image
                src="/images/logo-image-part.png"
                width={63}
                height={45}
                alt="logo"
              />
              <Image
                src="/images/logo-text-part.png"
                width={150}
                height={45}
                alt="logo"
                className="max-w-28"
              />
            </div>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarData.map((item) =>
                  item.children ? (
                    <Collapsible key={item.title} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="text-white !hover:text-black">
                            {/* <item.icon /> */}
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.children.map((child) => (
                              <SidebarMenuSubItem key={child.title}>
                                <SidebarMenuSubButton
                                  className="text-white"
                                  asChild
                                >
                                  <a href={child.url}>
                                    {/* {child.icon && <child.icon />} */}
                                    <span>{child.title}</span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild className="text-white">
                        <a href={item.url}>
                          {/* <item.icon /> */}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarTrigger />
    </Sidebar>
  );
}
