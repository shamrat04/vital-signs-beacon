
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Phone } from "lucide-react"

const appointments = [
  {
    id: 1,
    patient: "Alice Thompson",
    time: "09:00 AM",
    type: "Consultation",
    duration: "30 min",
    status: "Confirmed"
  },
  {
    id: 2,
    patient: "John Martinez",
    time: "10:30 AM", 
    type: "Follow-up",
    duration: "15 min",
    status: "Pending"
  },
  {
    id: 3,
    patient: "Maria Garcia",
    time: "02:00 PM",
    type: "Lab Review",
    duration: "20 min", 
    status: "Confirmed"
  },
  {
    id: 4,
    patient: "David Wilson",
    time: "03:30 PM",
    type: "Physical Exam",
    duration: "45 min",
    status: "Rescheduled"
  }
]

export function UpcomingAppointments() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Rescheduled': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today's Appointments</CardTitle>
        <CardDescription>Scheduled appointments for today</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div className="text-lg font-semibold text-primary">{appointment.time}</div>
                  <div className="text-xs text-gray-500">{appointment.duration}</div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{appointment.patient}</h4>
                  <p className="text-sm text-gray-500">{appointment.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={getStatusColor(appointment.status)}>
                  {appointment.status}
                </Badge>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t">
          <Button variant="outline" className="w-full">
            View All Appointments
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
