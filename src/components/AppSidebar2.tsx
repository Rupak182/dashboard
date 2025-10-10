import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar2() {
  return (
    <Sidebar side="right" >
      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel>Notification</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-3">
              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="p-2 rounded-md bg-[#E5ECF6]">
                      <Image src="/notification/user.svg" alt="user" width={40} height={40} className="w-fit" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">New User Registered</div>
                    <div className="text-sm text-muted-foreground">59 minutes ago</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="p-2 rounded-md bg-[#E3F5FF]">
                      <Image src="/notification/BugBeetle.svg" alt="user" width={40} height={40} className="w-fit" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">You have bug that needs...</div>
                    <div className="text-sm text-muted-foreground">12 hours ago</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="p-2 rounded-md bg-[#E3F5FF]">
                      <Image src="/notification/BugBeetle.svg" alt="user" width={40} height={40} className="w-fit" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">You have bug that needs...</div>
                    <div className="text-sm text-muted-foreground">Just Now</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <div>
                    <div className="p-2 rounded-md bg-[#E5ECF6]">
                      <Image src="/notification/Broadcast.svg" alt="user" width={40} height={40} className="w-fit" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm">Andi Lane subscribed to you</div>
                    <div className="text-sm text-muted-foreground">Today, 11:59 AM</div>
                  </div>
                </div>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel>Activities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-3">
              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p1.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div className="text-sm">You have bug that needs...</div>
                    <div className="text-sm text-muted-foreground">Just now</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p2.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div className="text-sm">Released a new version</div>
                    <div className="text-sm text-muted-foreground">59 minutes ago</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p3.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div className="text-sm">Submitted a bug</div>
                    <div className="text-sm text-muted-foreground">12 hours ago</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p4.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div className="text-sm">Modified A data in Page X</div>
                    <div className="text-sm text-muted-foreground">Today, 11:59 AM</div>
                  </div>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p5.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div className="text-sm">Deleted a page in Project X</div>
                    <div className="text-sm text-muted-foreground">Feb 2, 2023</div>
                  </div>
                </div>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>



        <SidebarGroup>
          <SidebarGroupLabel>Contacts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-3">
              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p6.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div >Natali Craig</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p7.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div >Drew Cano</div>
                  </div>
                </div>
              </SidebarMenuItem>
              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p8.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div >Orlando Diggs</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p9.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div >Andi Lane</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p10.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div >Kate Morrison</div>
                  </div>
                </div>
              </SidebarMenuItem>

              <SidebarMenuItem >
                <div className="flex items-center gap-3">
                  <Image src="/notification/p11.png" alt="user" width={40} height={40} className="w-6" />
                  <div>
                    <div >Koray Okumus</div>
                  </div>
                </div>
              </SidebarMenuItem>


            </SidebarMenu>


          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  )
}