"use client"
import React from 'react'
import Image from 'next/image'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@/components/ui/input-group'
import { Kbd } from '@/components/ui/kbd'
import { SearchIcon } from 'lucide-react'
import {AppSidebar} from '@/components/AppSidebar'
import { Button } from './ui/button'
import { AppSidebar2 } from './AppSidebar2'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'

export default function Sidebars({
  children
}: {
  children: React.ReactNode
}) {
  const { setTheme, theme } = useTheme()
  const pathname = usePathname()
  const [leftOpen, setLeftOpen] = React.useState(false);
  const [rightOpen, setRightOpen] = React.useState(true);

  // Get the current page name based on pathname
  const getCurrentPageName = () => {
    if (pathname === '/orders') return 'Orders'
    return 'Default'
  }

  const getCurrentPagePath = () => {
    if (pathname === '/orders') return '/orders'
    return '/'
  }
  return (
    <SidebarProvider open={rightOpen} onOpenChange={setRightOpen}>
      <SidebarProvider open={leftOpen} onOpenChange={setLeftOpen}>
        <AppSidebar />
        <SidebarInset>
           <header className=" sticky-top z-10 border-b px-4 py-5 flex items-center justify-between">
                <div className="flex shrink-0 grow items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setLeftOpen(prev => !prev)}><Image src="/navbar/side.svg" alt="side" className="w-fit dark:invert" width={32} height={32} /></Button>
                  <Image src="/navbar/star.svg" alt="star" className="w-fit dark:invert sm:block hidden" width={100} height={24} />
                  <Breadcrumb className='sm:block hidden'>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboards</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator>
                        <Image src="/navbar/slash.svg" alt="slash" className="w-fit py-2 mt-1 dark:invert" width={20} height={20} />
                      </BreadcrumbSeparator>
                      <BreadcrumbItem>
                        <BreadcrumbLink className="text-primary font-medium" href={getCurrentPagePath()}>{getCurrentPageName()}</BreadcrumbLink>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </div>

                <div className="flex   gap-6">
                  <InputGroup className='bg-muted text-muted-foreground hidden md:flex'>
                    <InputGroupInput placeholder="Search..."  className='placeholder:text-muted-foreground'/>
                    <InputGroupAddon >
                      <SearchIcon />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                      <Kbd className='bg-transparent text-lg'>⌘</Kbd>
                      <Kbd className='bg-transparent text-lg'>/</Kbd>
                    </InputGroupAddon>
                  </InputGroup>

                  <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    <Image src="/navbar/sun.svg" alt="theme toggle" className="w-fit dark:invert" width={32} height={32} />
                  </Button>
                  <Image src="/navbar/timer.svg" alt="timer" className="w-fit dark:invert md:block hidden" width={32} height={32} />
                  <Image src="/navbar/bell.svg" alt="bell" className="w-fit dark:invert md:block hidden" width={32} height={32} />
                  <Button variant="ghost" size="icon" onClick={() => setRightOpen(prev => !prev)}><Image src="/navbar/side.svg" alt="side" className="w-fit dark:invert" width={32} height={32} /></Button>
                </div>
              </header>
          
          <main className="flex-1 overflow-y-auto">{children}</main>
        </SidebarInset>
      </SidebarProvider>
        <AppSidebar2/>
    </SidebarProvider>
  );
}
// https://github.com/shadcn-ui/ui/issues/5834