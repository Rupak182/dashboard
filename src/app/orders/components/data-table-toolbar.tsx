"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table } from "@tanstack/react-table"
import { ArrowUpDown, ArrowUp, ArrowDown, SearchIcon } from "lucide-react"
import { DataTableViewOptions } from "./data-table-view-options"
import Image from "next/image"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"



interface DataTableToolbarProps<TData> {
    table: Table<TData>
}

export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    // Get sortable columns
    const sortableColumns = table.getAllColumns().filter(column =>
        column.getCanSort() && column.id !== 'select' && column.id !== 'actions' && column.id !== 'date'
    )

    const sorting = table.getState().sorting
    const currentSort = sorting.length > 0 ? sorting[0] : null

    return (
        <div className="flex items-center  justify-between">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <Image src="/orders/plus.svg" alt="Logo" width={20} height={20} className="dark:invert" />
                </Button>

                <DataTableViewOptions table={table} />

                {/* Global Sort Button */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8">
                            <Image src="/orders/updown.svg" alt="sort_logo" width={20} height={20} className="dark:invert" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" >
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        {/* Sort options for each column */}
                        {sortableColumns.map((column) => {
                            // Handle function headers by extracting the text or using column id
                            const headerText = typeof column.columnDef.header === 'function' 
                                ? column.id.charAt(0).toUpperCase() + column.id.slice(1)
                                : (column.columnDef.header as string) || column.id;
                            
                            return (
                                <DropdownMenuItem
                                    key={column.id}
                                    onClick={() => column.toggleSorting()}
                                >
                                    {headerText}
                                </DropdownMenuItem>
                            );
                        })}

                        {/* Clear sorting option */}
                        {currentSort && (
                            <>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    onClick={() => table.resetSorting()}
                                    className="text-muted-foreground"
                                >
                                    Clear sorting
                                </DropdownMenuItem>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="flex  items-center gap-2">

                <InputGroup className="bg-white/40">
                    <InputGroupInput placeholder="Search" value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("user")?.setFilterValue(event.target.value)
                        }
                    />
                    <InputGroupAddon>
                        <SearchIcon />
                    </InputGroupAddon>
                </InputGroup>


            </div>
        </div>
    )
}