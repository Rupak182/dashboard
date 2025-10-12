import Image from 'next/image'
import React from 'react'
import { Progress } from './ui/progress'
import { Label } from './ui/label'

// Location data
const locationData = [
  { id: 1, city: "NewYork", value: 72 },
  { id: 2, city: "San Francisco", value: 39 },
  { id: 3, city: "Sydney", value: 72 },
  { id: 4, city: "Singapore", value: 61 }
]

export default function AppMap() {
  return (
    <div>
       <Image src="/main/WorldMap.svg" alt="map" width={300} height={300} />
          <div className="space-y-4">
            {locationData.map((location) => (
              <div key={location.id} className="space-y-2">
                <Label className="flex justify-between">
                  <span>{location.city}</span>
                  <span>{location.value}K</span>
                </Label>
                <Progress value={location.value} className="h-1 " />
              </div>
            ))}
          </div>
        </div>
  ) 
}
