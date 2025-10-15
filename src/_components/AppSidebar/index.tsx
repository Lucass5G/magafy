"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@components/Sidebar";
import {Heading} from "@components/Typography";
import {DiscIcon, HomeIcon, PlayIcon} from "lucide-react";
import Image from "next/image";
import {usePathname} from "next/navigation";

const items = [
  {
    title: "Inicio",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Artistas",
    url: "/artistas",
    icon: DiscIcon,
  },
  {
    title: "Playlists",
    url: "/playlists",
    icon: PlayIcon,
  },
  {
    title: "Perfil",
    url: "/perfil",
    icon: PlayIcon,
  },
];
export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="p-8">
        <Image
          src={"/spotify-logo-white.svg"}
          alt={"logo spotify na cor branca"}
          width={164}
          height={49}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className={"px-4"}>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <a href={item.url} className={"text-base"}>
                      <item.icon />
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className={"text-center"}>
        <Heading as={"h5"}>Instalar PWA</Heading>
      </SidebarFooter>
    </Sidebar>
  );
}
