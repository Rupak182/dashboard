
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"

// Notifications data
const notifications = [
  
  {
    id: 1,
    icon: "/notification/BugBeetle.svg",
    title: "You have a bug that needs to be fixed.",
    time: "12 hours ago",
    bgColor: "bg-[#E3F5FF]"
  },

  {
    id: 2,
    icon: "/notification/user.svg",
    title: "New User Registered",
    time: "59 minutes ago",
    bgColor: "bg-[#E5ECF6]"
  },
  {
    id: 3,
    icon: "/notification/BugBeetle.svg",
    title: "You have a bug that needs to be fixed.",
    time: "Just now",
    bgColor: "bg-[#E3F5FF]"
  },
  {
    id: 4,
    icon: "/notification/Broadcast.svg",
    title: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    bgColor: "bg-[#E5ECF6]"
  }
]

// Activities data
const activities = [
  {
    id: 1,
    avatar: "/notification/p1.png",
    title: "You have a bug that needs to be fixed.",
    time: "Just now"
  },
  {
    id: 2,
    avatar: "/notification/p2.png",
    title: "Released a new version",
    time: "59 minutes ago"
  },
  {
    id: 3,
    avatar: "/notification/p3.png",
    title: "Submitted a bug",
    time: "12 hours ago"
  },
  {
    id: 4,
    avatar: "/notification/p4.png",
    title: "Modified A data in Page X",
    time: "Today, 11:59 AM"
  },
  {
    id: 5,
    avatar: "/notification/p5.png",
    title: "Deleted a page in Project X",
    time: "Feb 2, 2023"
  }
]

// Contacts data
const contacts = [
  { id: 1, avatar: "/notification/p6.png", name: "Natali Craig" },
  { id: 2, avatar: "/notification/p7.png", name: "Drew Cano" },
  { id: 3, avatar: "/notification/p8.png", name: "Orlando Diggs" },
  { id: 4, avatar: "/notification/p9.png", name: "Andi Lane" },
  { id: 5, avatar: "/notification/p10.png", name: "Kate Morrison" },
  { id: 6, avatar: "/notification/p11.png", name: "Koray Okumus" }
]



export function AppSidebar2() {
  return (
    <Sidebar side="right" >
      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupLabel className="text-primary text-base font-semibold mb-3 px-0">Notifications</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-3">
              {notifications.map((notification) => (
                <SidebarMenuItem key={notification.id}>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className={`p-2 rounded-md ${notification.bgColor}`}>
                        <Image src={notification.icon} alt="notification" width={40} height={40} className="w-fit" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{notification.title}</div>
                      <div className="text-sm text-muted-foreground">{notification.time}</div>
                    </div>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>


        <SidebarGroup>
          <SidebarGroupLabel className="text-primary text-base font-semibold mb-3 px-0">Activities</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-3">
              {activities.map((activity) => (
                <SidebarMenuItem key={activity.id}>
                  <div className="flex items-center gap-3">
                    <Image src={activity.avatar} alt="user" width={40} height={40} className="w-6" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm truncate">{activity.title}</div>
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>



        <SidebarGroup>
          <SidebarGroupLabel className="text-primary text-base font-semibold mb-3 px-0">Contacts</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex gap-4">
              {contacts.map((contact) => (
                <SidebarMenuItem key={contact.id}>
                  <div className="flex items-center gap-4">
                    <Image src={contact.avatar} alt="user" width={40} height={40} className="w-6" />
                    <div>
                      <div>{contact.name}</div>
                    </div>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  )
}