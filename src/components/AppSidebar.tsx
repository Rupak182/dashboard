import { Calendar, ChevronDown, Home, Inbox, Search, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

// Menu items.
const dashboardItems = [
    {
        title: "Default",
        url: "/#",
        icon: "/sidebar/pie.svg",
        hasChildren: false,
    },
    {
        title: "eCommerce",
        url: "/#",
        icon: "/sidebar/ecom.svg",
        hasChildren: true,
    },
    {
        title: "Projects",
        url: "/#",
        icon: "/sidebar/folder.svg",
        hasChildren: true,
    },
    {
        title: "Online Courses",
        url: "/#",
        icon: "/sidebar/book.svg",
        hasChildren: true,
    },
]

const pageItems = [
    {
        title: "User Profile",
        url: "/#",
        icon: "/sidebar/user.svg",
        hasChildren: true,
        subItems: [
            { title: "Overview", url: "/#" },
            { title: "Projects", url: "/#" },
            { title: "Campaigns", url: "/#" },
            { title: "Documents", url: "/#" },
            { title: "Followers", url: "/#" },
        ],
    },
    {
        title: "Account",
        url: "/#",
        icon: "/sidebar/card.svg",
        hasChildren: true,
        subItems: [],
    },
    {
        title: "Corporate",
        url: "/#",
        icon: "/sidebar/people.svg",
        hasChildren: true,
        subItems: [],
    },
    {
        title: "Blog",
        url: "/#",
        icon: "/sidebar/book_close.svg",
        hasChildren: true,
        subItems: [],
    },
    {
        title: "Social",
        url: "/#",
        icon: "/sidebar/chat.svg",
        hasChildren: true,
        subItems: [],
    },
]



export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    {/* Section 1 */}

                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/">
                                <Avatar>
                                    <AvatarImage src="/sidebar/avatar.png" />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                                <span className="font-medium">ByeWind</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            {/* Section 2*/}

            <SidebarContent>
                <SidebarGroup >
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Tabs defaultValue="favourites" className="w-[400px] ">
                                    <TabsList>
                                        <TabsTrigger value="favourites">Favourites</TabsTrigger>
                                        <TabsTrigger value="recent">Recently</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="favourites">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Overview</li>
                                            <li>Projects</li>
                                        </ul>
                                    </TabsContent>
                                    <TabsContent value="recent">
                                        <ul className="list-disc pl-5 space-y-1">
                                            <li>Recent Projects</li>
                                        </ul>
                                    </TabsContent>
                                </Tabs>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Section 3 */}
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboards</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {dashboardItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    {item.hasChildren ? (
                                        <Collapsible defaultOpen={false} className="group/collapsible">
                                            <SidebarMenuButton asChild>
                                                <CollapsibleTrigger>
                                                    <ChevronDown className="transition-transform -rotate-90 group-data-[state=open]/collapsible:rotate-0" />
                                                    <Image src={item.icon} alt={item.title} width={20} height={20} />
                                                    {item.title}
                                                </CollapsibleTrigger>
                                            </SidebarMenuButton>
                                            <SidebarMenuSub>
                                                <CollapsibleContent>
                                                    {/* Sub-items can be added here */}
                                                </CollapsibleContent>
                                            </SidebarMenuSub>
                                        </Collapsible>
                                    ) : (
                                        <SidebarMenuSubButton asChild>
                                            <Link href={item.url} className="pl-8">
                                                <Image src={item.icon} alt={item.title} width={20} height={20} />
                                                {item.title}
                                            </Link>
                                        </SidebarMenuSubButton>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Section 4 */}

                <SidebarGroup >
                    <SidebarGroupLabel>Pages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {pageItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <Collapsible defaultOpen={false} className="group/collapsible">
                                        <SidebarMenuButton asChild>
                                            <CollapsibleTrigger>
                                                <ChevronDown className="transition-transform -rotate-90 group-data-[state=open]/collapsible:rotate-0" />
                                                <Image src={item.icon} alt={item.title} width={20} height={20} />
                                                {item.title}
                                            </CollapsibleTrigger>
                                        </SidebarMenuButton>
                                        <SidebarMenuSub>
                                            <CollapsibleContent>
                                                {item.subItems?.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild>
                                                            <Link href={subItem.url}>
                                                                {subItem.title}
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </CollapsibleContent>
                                        </SidebarMenuSub>
                                    </Collapsible>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>


            </SidebarContent>
        </Sidebar>
    )
}