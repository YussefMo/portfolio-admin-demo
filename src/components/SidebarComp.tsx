import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@radix-ui/react-dropdown-menu';
import { ChevronUp, FolderGit2Icon, Home, Inbox, User2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Projects',
    url: '/projects',
    icon: FolderGit2Icon
  },
  {
    title: 'Contact Request',
    url: '/contact-request',
    icon: Inbox
  }
];

function SidebarComp() {


  return (
    <>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="text-md mb-2">
                      <NavLink to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="bg-accent shadow-lg rounded-md ml-[-150%] w-[400%]"
                >
                  <DropdownMenuItem className="mb-2 p-1">
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="mb-2 p-1">
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="mb-2 p-1">
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}

export default SidebarComp;
