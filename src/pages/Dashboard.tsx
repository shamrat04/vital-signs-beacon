
import { DashboardStats } from "@/components/DashboardStats"
import { RecentPatients } from "@/components/RecentPatients"
import { UpcomingAppointments } from "@/components/UpcomingAppointments"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Dr. Johnson. Here's what's happening today.</p>
      </div>

      <DashboardStats />

      <div className="grid gap-8 lg:grid-cols-2">
        <RecentPatients />
        <UpcomingAppointments />
      </div>
    </div>
  )
}
