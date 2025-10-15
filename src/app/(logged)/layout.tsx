import {AppSidebar} from "@components/AppSidebar";
import {SidebarProvider, SidebarTrigger} from "@components/Sidebar";
import type {ReactNode} from "react";

export default function LoggedLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <SidebarTrigger />
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
