import React from 'react'
import Image from 'next/image'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'
import { SearchIcon } from 'lucide-react'
import {AppSidebar} from '@/components/AppSidebar'

export default function Sidebars({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
       <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex h-screen flex-col">
              <header className=" sticky-top z-10 border-b px-4 py-5 flex items-center justify-between">
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

                <div className="flex w-full max-w-xs  gap-6">
                  <InputGroup>
                    <InputGroupInput placeholder="Search..." />
                    <InputGroupAddon >
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
                  
                  {/* <Sheet>
                    <SheetTrigger asChild>
                      <Image src="/navbar/side.svg" alt="side" className="w-fit cursor-pointer" width={32} height={32} />
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80 p-0">
                      <AppSidebar2 />
                    </SheetContent>
                  </Sheet> */}
                </div>
              </header>
              <main className="flex-1 overflow-y-auto">{children}</main>
            </SidebarInset>
          </SidebarProvider>
    </div>
  )
}
