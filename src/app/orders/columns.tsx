"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
   
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import Image from "next/image"

// Updated type to match the new data structure
export type Payment = {
    orderId: string;
    user: string;
    project: string;
    address: string;
    date: string;
    status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
    avatar: string; // p1.png to p5.png
};

export const columns: ColumnDef<Payment>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected()
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "orderId",
        header: () => <div className="text-muted-foreground font-medium">Order ID</div>,
    },
    {
        accessorKey: "user",
        header: () => <div className="text-muted-foreground font-medium">User</div>,
        cell: ({ row }) => {
            const user = row.getValue("user");
            const avatar = row.original.avatar;
            return (
                <div className="flex items-center gap-3">
                    <Image
                        src={`/orders/${avatar}`}
                        alt={user as string}
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                    <span className="text-primary font-medium">{user as string}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "project",
        header: () => <div className="text-muted-foreground font-medium">Project</div>,
        cell: ({ row }) => (
            <span className="text-gray-900">{row.getValue("project")}</span>
        ),
    },
    {
        accessorKey: "address",
        header: () => <div className="text-muted-foreground font-medium">Address</div>,
        cell: ({ row }) => (
            <span className="text-primary">{row.getValue("address")}</span>
        ),
    },
    {
        accessorKey: "date",
        header: () => <div className="text-muted-foreground font-medium">Date</div>,
        cell: ({ row }) => {
            const date = row.getValue("date");
            return (
                <div className="flex items-center gap-2">
                    <Image
                        src="/orders/calender.svg"
                        alt="Calendar"
                        width={16}
                        height={16}
                    />
                    <span className="text-primary">{date as string}</span>
                </div>
            );
        },
    },
    {
        accessorKey: "status",
        header: () => <div className="text-muted-foreground font-medium">Status</div>,
        cell: ({ row }) => {
            const status = row.getValue("status");
            return (
                <div
                    className={cn(
                        `px-2 py-1 rounded-full text-sm font-medium w-max`,
                        status === "Pending" && " text-[#59A8D4]",
                        status === "Complete" && " text-[#4AA785]",
                        status === "In Progress" && " text-[#8A8CD9]",
                        status === "Approved" && " text-[#FFC555]",
                        status === "Rejected" && " text-muted-foreground",
                    )}
                >
                    ● {status as string}
                </div>
            );
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.orderId)}
                        >
                            Copy order ID
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
]