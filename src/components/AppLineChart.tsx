"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { useTheme } from "next-themes"

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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  { name: "Jan", currentWeek: 9, previousWeek: 8 },
  { name: "Feb", currentWeek: 10, previousWeek: 18 },
  { name: "Mar", currentWeek: 13, previousWeek: 15 },
  { name: "Apr", currentWeek: 17, previousWeek: 12 },
  { name: "May", currentWeek: 23, previousWeek: 17 },
  { name: "Jun", currentWeek: 25, previousWeek: 30 },
];

export function AppLineChart() {
  const { theme } = useTheme()
  
  const chartConfig = {
    currentWeek: { 
      label: "Current Week", 
      color: theme === 'dark' ? "#C6C7F8" : "#1C1C1C" 
    },
    previousWeek: { 
      label: "Previous Week", 
      color:  "#A8C5DA" 
    },
  } satisfies ChartConfig
  return (
    <Card  className="bg-transparent border-none shadow-none p-0">
      <CardHeader>
        <CardTitle className="text-lg font-semibold ">Revenue</CardTitle>
        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: chartConfig.currentWeek.color }}
            ></div>
            <span className="text-sm text-muted-foreground">Current Week</span>
            <span className="font-semibold">$58,211</span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: chartConfig.previousWeek.color }}
            ></div>
            <span className="text-sm text-muted-foreground">Previous Week</span>
            <span className="font-semibold">$68,768</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
          <LineChart
            accessibilityLayer
            data={data}
            margin={{ left: 12, right: 12 }}
          >
            <CartesianGrid vertical={false} />
            
        
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "var(--muted-foreground)" }}
              fontSize={12}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `${v}M`}
              tick={{ fill: "var(--muted-foreground)" }}
              fontSize={12}
            />
            
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            
            <Line
              dataKey="currentWeek"
              stroke={theme === 'dark' ? "#C6C7F8" : "#1C1C1C" } 
              strokeWidth={3}
              dot={false}
              type="monotone"
            />
            <Line
              dataKey="previousWeek"
              stroke="#A8C5DA" 
              strokeWidth={3}
              dot={false}
              type="monotone"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}