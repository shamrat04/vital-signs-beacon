
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, Plus, Phone, Mail, MapPin } from "lucide-react"

const patients = [
  {
    id: 1,
    name: "Emily Johnson",
    age: 34,
    gender: "Female",
    phone: "(555) 123-4567",
    email: "emily.johnson@email.com",
    address: "123 Oak Street, City, State",
    lastVisit: "2024-01-15",
    condition: "Hypertension",
    status: "Active"
  },
  {
    id: 2,
    name: "Michael Chen",
    age: 45,
    gender: "Male", 
    phone: "(555) 234-5678",
    email: "michael.chen@email.com",
    address: "456 Pine Avenue, City, State",
    lastVisit: "2024-01-14",
    condition: "Diabetes Type 2",
    status: "Discharged"
  },
  {
    id: 3,
    name: "Sarah Williams",
    age: 28,
    gender: "Female",
    phone: "(555) 345-6789", 
    email: "sarah.williams@email.com",
    address: "789 Elm Drive, City, State",
    lastVisit: "2024-01-12",
    condition: "Pregnancy Checkup",
    status: "Follow-up"
  },
  {
    id: 4,
    name: "Robert Davis",
    age: 62,
    gender: "Male",
    phone: "(555) 456-7890",
    email: "robert.davis@email.com", 
    address: "321 Maple Lane, City, State",
    lastVisit: "2024-01-08",
    condition: "Cardiac Monitoring",
    status: "Stable"
  }
]

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "All" || patient.status === selectedStatus
    return matchesSearch && matchesStatus
  })

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
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-600">Manage patient records and information</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add New Patient
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>Patient Directory</CardTitle>
              <CardDescription>
                {filteredPatients.length} patients found
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search patients..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="p-6 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-white text-lg">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                        <Badge variant="secondary" className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <p className="text-gray-600">
                        {patient.age} years old • {patient.gender} • {patient.condition}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          {patient.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          {patient.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Last visit: {patient.lastVisit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Records
                    </Button>
                    <Button variant="outline" size="sm">
                      Schedule
                    </Button>
                    <Button size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
