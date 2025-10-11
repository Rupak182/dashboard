import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Base data that repeats every 5 entries
  const baseData = [
    {
      orderId: "#CM9801",
      user: "Natali Craig",
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress" as const,
      avatar: "p1.png"
    },
    {
      orderId: "#CM9802", 
      user: "Kate Morrison",
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago", 
      status: "Complete" as const,
      avatar: "p2.png"
    },
    {
      orderId: "#CM9803",
      user: "Drew Cano", 
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending" as const,
      avatar: "p3.png"
    },
    {
      orderId: "#CM9804",
      user: "Orlando Diggs",
      project: "Admin Dashboard", 
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved" as const,
      avatar: "p4.png"
    },
    {
      orderId: "#CM9805",
      user: "Andi Lane",
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023", 
      status: "Rejected" as const,
      avatar: "p5.png"
    }
  ];

  // Generate 50 entries (10 cycles of 5 entries)
  const data: Payment[] = [];
  for (let cycle = 0; cycle < 10; cycle++) {
    baseData.forEach((item, index) => {
      data.push({
        orderId: item.orderId,
        user: item.user,
        project: item.project,
        address: item.address,
        date: item.date,
        status: item.status,
        avatar: item.avatar
      });
    });
  }

  return data;
}

export default async function DemoPage() {
  const data = await getData()
  return (
    <div className="m-8 rounded-md">
      <div className="p-2">
        <h1 className="font-semibold">All Orders</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  )
}