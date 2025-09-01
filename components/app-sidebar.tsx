"use client";

import * as React from "react";
import { House } from "lucide-react";
import {
  IconTerminal2,
  IconRobot,
  IconLayoutDashboard,
  IconFileInvoice,
  IconHome,
  IconBuildingSkyscraper,
  IconUsers,
  IconDoor,
  IconWallet,
  IconLibrary,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useRouter, usePathname } from "next/navigation";

const initialData = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Overview",
      items: [
        {
          title: "Home",
          url: "/",
          icon: IconHome,
          isActive: false,
        },
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: IconLayoutDashboard,
          isActive: false,
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          title: "Property",
          url: "/property",
          icon: IconBuildingSkyscraper,
          isActive: false,
        },
        {
          title: "Tenants",
          url: "/tenants",
          icon: IconUsers,
          isActive: false,
        },
        {
          title: "Rooms",
          url: "/rooms",
          icon: IconDoor,
          isActive: false,
        },
      ],
    },
    {
      title: "Reporting",
      items: [
        {
          title: "Transactions",
          url: "/transactions",
          icon: IconWallet,
          isActive: false,
        },
        {
          title: "Reports",
          url: "/reports",
          icon: IconLibrary,
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter();
  const pathname = usePathname();
  const [navData, setNavData] = React.useState(initialData);

  React.useEffect(() => {
    setNavData((prevData) => ({
      ...prevData,
      navMain: prevData.navMain.map((section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          isActive: pathname === item.url,
        })),
      })),
    }));
  }, [pathname]);

  const handleMenuClick = (url: string, title: string) => {
    router.push(url);
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <House className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">MHouse</span>
                  <span className="truncate text-xs">Kost Management</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navData.navMain} onMenuClick={handleMenuClick} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navData.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
