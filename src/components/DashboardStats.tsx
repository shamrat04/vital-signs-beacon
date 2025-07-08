
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, FileText, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Today's Appointments",
    value: "24",
    change: "+5%",
    icon: Calendar,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Pending Records",
    value: "156",
    change: "-8%",
    icon: FileText,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    title: "Monthly Revenue",
    value: "$45,250",
    change: "+18%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  }
]

export function DashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                {stat.change}
              </span>
              {' '}from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
