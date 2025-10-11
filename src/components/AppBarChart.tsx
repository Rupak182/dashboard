"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { useTheme } from "next-themes"


const chartData = [
  { month: "January", Projection: 20, Actual: 0 },
  { month: "February", Projection: 25, Actual: 20 },
  { month: "March", Projection: 22, Actual: 18 },
  { month: "April", Projection: 28, Actual: 25 },
  { month: "May", Projection: 18, Actual: 15 },
  { month: "June", Projection: 25, Actual: 22 },
]



export function AppBarChart() {
  const { theme } = useTheme()
  
  const chartConfig = {
    Projection: {
      label: "Projection",
      color: theme === "dark" ? "#A8C5DA" : "#A8C5DA",
    },
    Actual: {
      label: "Actual",
      color: theme === "dark" ? "#677680" : "#CFDFEA",
    },
  } satisfies ChartConfig
  return (
    <Card className="flex flex-col bg-transparent border-none shadow-none p-0  ">
      <CardHeader>
        <CardTitle>Projection Vs Actuals</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="h-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => `${value}M`}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="Projection"
              stackId="a"
              fill="var(--color-Projection)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="Actual"
              stackId="a"
              fill="var(--color-Actual)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
