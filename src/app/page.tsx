import Image from "next/image";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AppBarChart } from "@/components/AppBarChart";
import { AppLineChart } from "@/components/AppLineChart,";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { AppPieChart } from "@/components/AppPieChart";

export default function Home() {
  return (
    <div className="p-4 ">
      <div className="font-bold my-2 px-4">
        eCommerce
      </div>

      <div className="grid lg:grid-cols-4 gap-10 mb-20">
        <div className="bg-primary-foreground p-4 rounded-lg col-span-2">
          <div className=" grid grid-cols-2 gap-4  ">
            <Card className="">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="font-bold text-xl">3,781</p>
                <span className="relative bottom-2 flex gap-2 items-center justify-center">
                  <span>+11.01%</span>
                  <span><Image src="/main/ArrowRise.svg" alt="ArrowUp" width={18} height={18} /></span>
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="font-bold text-xl">1,219</p>
                <span className="relative bottom-2 flex gap-2 items-center justify-center">
                  <span>-0.03%</span>
                  <span><Image src="/main/ArrowDown.svg" alt="ArrowDown" width={18} height={18} /></span>
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="font-bold text-xl">$695</p>
                <span className="relative bottom-2 flex gap-2 items-center justify-center">
                  <span>+15.03%</span>
                  <span><Image src="/main/ArrowRise.svg" alt="ArrowUp" width={18} height={18} /></span>
                </span>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Growth</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-between">
                <p className="font-bold text-xl">30.1%</p>
                <span className="relative bottom-2 flex gap-2 items-center justify-center">
                  <span>+6.08%</span>
                  <span><Image src="/main/ArrowRise.svg" alt="ArrowUp" width={18} height={18} /></span>
                </span>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="bg-primary-foreground p-6 rounded-lg col-span-2">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg col-span-3">
          <AppLineChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg ">

          <Image src="/main/WorldMap.svg" alt="map" width={300} height={300} />
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="flex justify-between ">
                <span>NewYork</span>
                <span>72K</span>
              </Label>
              <Progress value={72} className="h-1" />
            </div>

            <div className="space-y-2">
              <Label className="flex justify-between">
                <span>San Francisco</span>
                <span>39K</span>
              </Label>
              <Progress value={39} className="h-1" />
            </div>

            <div className="space-y-2">
              <Label className="flex justify-between">
                <span>Sydney</span>
                <span>72K</span>
              </Label>
              <Progress value={72} className="h-1" />
            </div>

            <div className="space-y-2">
              <Label className="flex justify-between">
                <span>Singapore</span>
                <span>61K</span>
              </Label>
              <Progress value={61} className="h-1" />
            </div>
          </div>
        </div>

        <div className="bg-primary-foreground p-4 rounded-lg col-span-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Top Selling Products</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr]:border-0">
              <TableRow>
                <TableCell className="font-medium">ASOS Ridley High Waist</TableCell>
                <TableCell>$79.49</TableCell>
                <TableCell>82</TableCell>
                <TableCell className="text-right">$6,518.18</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marco Lightweight Shirt</TableCell>
                <TableCell>$128.50</TableCell>
                <TableCell>37</TableCell>
                <TableCell className="text-right">$4,754.50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Half Sleeve Shirt</TableCell>
                <TableCell>$39.99</TableCell>
                <TableCell>64</TableCell>
                <TableCell className="text-right">$2,559.36</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lightweight Jacket</TableCell>
                <TableCell>$20.00</TableCell>
                <TableCell>184</TableCell>
                <TableCell className="text-right">$3,680.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Marco Shoes</TableCell>
                <TableCell>$79.49</TableCell>
                <TableCell>64</TableCell>
                <TableCell className="text-right">$1,965.81</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg col-span-2">
          <AppPieChart />
        </div>
      </div>
    </div>
  );
}
