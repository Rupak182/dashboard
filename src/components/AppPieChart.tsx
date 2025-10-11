"use client"

import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A pie chart with a legend"

const chartData = [
    { browser: "sponsored", visitors: 154.02, fill: "var(--color-sponsored)" },
    { browser: "email", visitors: 48.96, fill: "var(--color-email)" },
      { browser: "affiliate", visitors: 135.18, fill: "var(--color-affiliate)" },
  { browser: "direct", visitors: 300.56, fill: "var(--color-direct)" },


]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  direct: {
    label: "Direct",
    color: "#45E4FF",
  },
  affiliate: {
    label: "Affiliate",
    color: "#BAEDBD",
  },
  sponsored: {
    label: "Sponsored",
    color: "#95A4FC",
  },
  email: {
    label: "E-mail",
    color: "#B1E3FF",
  },
 
} satisfies ChartConfig

export function AppPieChart() {
  return (
    <Card className="flex flex-col bg-transparent border-none shadow-none p-0">
      <CardHeader className="items-center pb-0">
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie 
              data={chartData} 
              dataKey="visitors" 
              innerRadius={40}
              paddingAngle={5}
              cornerRadius={5}
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 *:basis-1/4 *:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
