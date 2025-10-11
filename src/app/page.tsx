

import { AppBarChart } from "@/components/AppBarChart";
import { AppLineChart } from "@/components/AppLineChart";

import { AppPieChart } from "@/components/AppPieChart";
import AppCard from "@/components/ui/AppCard";
import AppMap from "@/components/AppMap";
import AppTable from "@/components/AppTable";





export default function Home() {
  return (
    <div className="p-4 ">
      <div className="font-bold my-2 px-4">
        eCommerce
      </div>

      <div className="grid lg:grid-cols-6 gap-4 mb-20 ">
        <div className=" p-4 rounded-lg col-span-3">
         <AppCard />
        </div>
        <div className="bg-primary-foreground p-6 rounded-lg col-span-3">
          <AppBarChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg col-span-4">
          <AppLineChart />
        </div>
        <div className="bg-primary-foreground p-4 rounded-lg col-span-2">
          <AppMap/>
        </div>

        <div className="bg-primary-foreground p-4 rounded-lg col-span-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Top Selling Products</h3>
          </div>
          <AppTable />
        </div>
        <div className="bg-primary-foreground p-4  rounded-lg col-span-2">
          <div className="">
            <h3 className="text-lg font-semibold">Total Sales</h3>
          </div>
          <AppPieChart />
        </div>
      </div>
    </div>
  );
}
