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
        url: "/orders",
        icon: "/sidebar/ecom.svg",
        hasChildren: false,
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

// Pages items
const pageItems = [
    {
        title: "User Profile",
        icon: "/sidebar/user.svg",
        hasChildren: true,
        subItems: [
            { title: "Overview", url: "/#" },
            { title: "Projects", url: "/#" },
            { title: "Campaigns", url: "/#" },
            { title: "Documents", url: "/#" },
            { title: "Followers", url: "/#" }
        ]
    },
    {
        title: "Account",
        icon: "/sidebar/card.svg",
        hasChildren: true,
        subItems: []
    },
    {
        title: "Corporate",
        icon: "/sidebar/people.svg",
        hasChildren: true,
        subItems: []
    },
    {
        title: "Blog",
        icon: "/sidebar/book_close.svg",
        hasChildren: true,
        subItems: []
    },
    {
        title: "Social",
        icon: "/sidebar/chat.svg",
        hasChildren: true,
        subItems: []
    }
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
                        <SidebarMenu className="">
                            <SidebarMenuItem className="!bg-transparent">
                                <Tabs defaultValue="favourites" className="w-[400px] !bg-transparent">
                                    <TabsList className="!bg-transparent">
                                        <TabsTrigger value="favourites">Favourites</TabsTrigger>
                                        <TabsTrigger value="recent">Recently</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="favourites">
                                        <ul className="space-y-2  mx-6">
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="w-[6px] h-[6px] rounded-full bg-muted-foreground"></div>
                                               <span className="text-primary">Overview</span> 
                                            </li>
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="w-[6px] h-[6px] rounded-full bg-muted-foreground"></div>
                                                <span className="text-primary">Projects</span>
                                            </li>
                                        </ul>
                                    </TabsContent>
                                    <TabsContent value="recent">
                                        <ul className="space-y-2 mx-6">
                                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                                <div className="w-[6px] h-[6px] rounded-full bg-muted-foreground"></div>
                                                <span className="text-primary">Recent Projects</span> 
                                            </li>
                                        </ul>
                                    </TabsContent>
                                </Tabs>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* Section 3 */}
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm text-muted-foreground">Dashboards</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuSub>
                            {dashboardItems.map((item) => (
                                <SidebarMenuSubItem key={item.title}>
                                    {item.hasChildren ? (
                                        <Collapsible defaultOpen={false} className="group/collapsible">
                                            <SidebarMenuSubButton asChild>
                                                <CollapsibleTrigger>
                                                    <ChevronDown className="transition-transform -rotate-90 group-data-[state=open]/collapsible:rotate-0" />
                                                    <Image src={item.icon} alt={item.title} width={20} height={20} className="dark:invert" />
                                                    {item.title}
                                                </CollapsibleTrigger>
                                            </SidebarMenuSubButton>
                                            <SidebarMenuSub>
                                                <CollapsibleContent>
                                                    {/* Sub-items can be added here */}
                                                </CollapsibleContent>
                                            </SidebarMenuSub>
                                        </Collapsible>
                                    ) : (
                                        <SidebarMenuSubButton asChild>
                                            <Link href={item.url} className="pl-8">
                                                <Image src={item.icon} alt={item.title} width={20} height={20} className="dark:invert" />
                                                {item.title}
                                            </Link>
                                        </SidebarMenuSubButton>
                                    )}
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* Section 4 */}

                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm text-muted-foreground">Pages</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenuSub>
                            {pageItems.map((item) => (
                                <SidebarMenuSubItem key={item.title}>
                                    <Collapsible defaultOpen={false} className="group/collapsible">
                                        <SidebarMenuSubButton asChild>
                                            <CollapsibleTrigger>
                                                <ChevronDown className="transition-transform -rotate-90 group-data-[state=open]/collapsible:rotate-0" />
                                                <Image src={item.icon} alt={item.title} width={20} height={20} className="dark:invert" />
                                                {item.title}
                                            </CollapsibleTrigger>
                                        </SidebarMenuSubButton>
                                        <SidebarMenuSub>
                                            <CollapsibleContent>
                                                {item.subItems.map((subItem) => (
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
                                </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                    </SidebarGroupContent>
                </SidebarGroup>


            </SidebarContent>
        </Sidebar>
    )
}