import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card'
import Image from 'next/image'

// Dashboard stats data
const dashboardStats = [
  {
    id: 1,
    title: "Customers",
    value: "3,781",
    percentage: "+11.01%",
    isPositive: true,
    bgColor: "bg-[#E3F5FF]"
  },
  {
    id: 2,
    title: "Orders",
    value: "1,219",
    percentage: "-0.03%",
    isPositive: false,
    bgColor: "bg-[#F7F9FB]"
  },
  {
    id: 3,
    title: "Revenue",
    value: "$695",
    percentage: "+15.03%",
    isPositive: true,
    bgColor: "bg-[#F7F9FB]"
  },
  {
    id: 4,
    title: "Growth",
    value: "30.1%",
    percentage: "+6.08%",
    isPositive: true,
    bgColor: "bg-[#E5ECF6]"
  }
]

export default function AppCard() {
  return (
     <div className=" grid grid-cols-2 gap-4  ">
            {dashboardStats.map((stat) => (
              <Card key={stat.id} className={`${stat.bgColor} text-black`}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-bold">{stat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                  <p className="font-bold text-xl">{stat.value}</p>
                  <span className="relative bottom-2 flex gap-2 items-center justify-center">
                    <span>{stat.percentage}</span>
                    <span>
                      <Image 
                        src={stat.isPositive ? "/main/ArrowRise.svg" : "/main/ArrowDown.svg"} 
                        alt={stat.isPositive ? "ArrowUp" : "ArrowDown"} 
                        width={18} 
                        height={18} 
                      />
                    </span>
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
  )
}
