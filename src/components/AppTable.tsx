import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'


// Top selling products data
const topProducts = [
  {
    id: 1,
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18"
  },
  {
    id: 2,
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50"
  },
  {
    id: 3,
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36"
  },
  {
    id: 4,
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00"
  },
  {
    id: 5,
    name: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    amount: "$1,965.81"
  }
]

export default function AppTable() {
  return (
   <Table>
            <TableHeader>
              <TableRow className="">
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Price</TableHead>
                <TableHead className="text-muted-foreground">Quantity</TableHead>
                <TableHead className="text-muted-foreground text-right" >Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr]:border-0">
              {topProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell className="text-right">{product.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
  )
}
