
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Clock, MapPin } from "lucide-react"

const recentPatients = [
  {
    id: 1,
    name: "Emily Johnson",
    age: 34,
    lastVisit: "2 hours ago",
    condition: "Hypertension",
    status: "Active",
    location: "Room 102"
  },
  {
    id: 2,
    name: "Michael Chen", 
    age: 45,
    lastVisit: "1 day ago",
    condition: "Diabetes Type 2",
    status: "Discharged",
    location: "Outpatient"
  },
  {
    id: 3,
    name: "Sarah Williams",
    age: 28,
    lastVisit: "3 days ago", 
    condition: "Pregnancy Checkup",
    status: "Follow-up",
    location: "Room 205"
  },
  {
    id: 4,
    name: "Robert Davis",
    age: 62,
    lastVisit: "1 week ago",
    condition: "Cardiac Monitoring",
    status: "Stable", 
    location: "ICU"
  }
]

export function RecentPatients() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Discharged': return 'bg-blue-100 text-blue-800'
      case 'Follow-up': return 'bg-yellow-100 text-yellow-800'
      case 'Stable': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Patients</CardTitle>
        <CardDescription>Latest patient interactions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentPatients.map((patient) => (
            <div key={patient.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-primary text-white">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-medium text-gray-900">{patient.name}</h4>
                  <p className="text-sm text-gray-500">Age {patient.age} • {patient.condition}</p>
                  <div className="flex items-center gap-4 mt-1">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {patient.lastVisit}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {patient.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className={getStatusColor(patient.status)}>
                  {patient.status}
                </Badge>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
