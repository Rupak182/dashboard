"use client"

import { useState } from "react";
import { Sidebar, SidebarContent, SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { AppSidebar2 } from "@/components/AppSidebar2";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "lucide-react";
import { Kbd } from "@/components/ui/kbd";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className={`flex h-screen flex-col transition-all duration-300 ${rightSidebarOpen ? 'mr-80' : ''}`}>
        <header className="sticky-top z-10 border-b px-4 py-5 flex items-center justify-between">
          <div className="flex shrink-0 grow items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Image src="/navbar/star.svg" alt="star" className="w-fit" width={100} height={24} />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Dashboards</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Image src="/navbar/slash.svg" alt="slash" className="w-fit py-2 mt-1" width={20} height={20} />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-black font-medium" href="/components">Default</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex w-full max-w-xs gap-6">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>⌘</Kbd>
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>

            <Image src="/navbar/sun.svg" alt="user" className="w-fit" width={32} height={32} />
            <Image src="/navbar/timer.svg" alt="timer" className="w-fit" width={32} height={32} />
            <Image src="/navbar/bell.svg" alt="bell" className="w-fit" width={32} height={32} />
            
            <button onClick={() => setRightSidebarOpen(!rightSidebarOpen)}>
              <Image src="/navbar/side.svg" alt="side" className="w-fit cursor-pointer" width={32} height={32} />
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarInset>
      
      {/* Right Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-80 bg-background border-l z-40 transform transition-transform duration-300 ${
        rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <AppSidebar2 />
      </div>
    </SidebarProvider>
  );
}