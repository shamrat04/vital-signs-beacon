
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function MemberAppointments() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
        <p className="text-gray-600">Scheduling and appointment management</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            Appointment Schedule
          </CardTitle>
          <CardDescription>Upcoming and past appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Appointment management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
