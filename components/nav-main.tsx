"use client";

import { type Icon } from "@tabler/icons-react";

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
  onMenuClick,
}: {
  items: {
    title: string;
    items: {
      title: string;
      url: string;
      icon?: Icon;
      isActive: boolean;
    }[];
  }[];
  onMenuClick: (url: string, title: string) => void;
}) {
  return (
    <SidebarContent>
      {items.map((item) => (
        <SidebarGroup key={item.title}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items.map((menuItem) => (
                <SidebarMenuItem key={menuItem.title}>
                  <SidebarMenuButton
                    tooltip={menuItem.title}
                    isActive={menuItem.isActive}
                    onClick={() => onMenuClick(menuItem.url, menuItem.title)}
                  >
                    {menuItem.icon && <menuItem.icon />}
                    <span>{menuItem.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
}
