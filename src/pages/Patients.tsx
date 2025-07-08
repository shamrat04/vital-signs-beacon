
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useToast } from "@/hooks/use-toast"
import { PatientForm } from "@/components/forms/PatientForm"
import { PatientDetailsModal } from "@/components/modals/PatientDetailsModal"
import { Search, Filter, Plus, Phone, Mail, MapPin, Calendar, Users, Activity, Clock, TrendingUp } from "lucide-react"

const initialPatients = [
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
    status: "Active",
    notes: "Regular monitoring required for blood pressure management."
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
    status: "Discharged",
    notes: "Follow-up in 3 months for diabetes management review."
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
    status: "Follow-up",
    notes: "32 weeks pregnant, regular prenatal care ongoing."
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
    status: "Stable",
    notes: "Post-surgery recovery progressing well."
  }
]

export default function Patients() {
  const [patients, setPatients] = useState(initialPatients)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("All")
  const [showForm, setShowForm] = useState(false)
  const [selectedPatient, setSelectedPatient] = useState<any>(null)
  const [editingPatient, setEditingPatient] = useState<any>(null)
  const { toast } = useToast()

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

  const handleAddPatient = () => {
    setEditingPatient(null)
    setShowForm(true)
  }

  const handleEditPatient = (patient: any) => {
    setEditingPatient(patient)
    setShowForm(true)
    setSelectedPatient(null)
  }

  const handleSavePatient = (patientData: any) => {
    if (editingPatient) {
      setPatients(patients.map(p => p.id === editingPatient.id ? patientData : p))
      toast({
        title: "Patient Updated",
        description: `${patientData.name}'s information has been updated successfully.`,
      })
    } else {
      setPatients([...patients, patientData])
      toast({
        title: "Patient Added",
        description: `${patientData.name} has been added to the system.`,
      })
    }
    setShowForm(false)
    setEditingPatient(null)
  }

  const handleViewRecords = (patient: any) => {
    setSelectedPatient(patient)
    toast({
      title: "Medical Records",
      description: `Opening ${patient.name}'s complete medical history.`,
    })
  }

  const handleScheduleAppointment = (patient: any) => {
    toast({
      title: "Schedule Appointment",
      description: `Scheduling new appointment for ${patient.name}.`,
    })
  }

  const handleDeletePatient = (patientId: number) => {
    setPatients(patients.filter(p => p.id !== patientId))
    toast({
      title: "Patient Removed",
      description: "Patient has been removed from the system.",
      variant: "destructive"
    })
  }

  // Calculate statistics
  const activePatients = patients.filter(p => p.status === 'Active').length
  const totalVisitsThisMonth = patients.length * 2 // Mock calculation
  const pendingFollowUps = patients.filter(p => p.status === 'Follow-up').length

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
          <p className="text-sm text-gray-600 mt-1">Comprehensive care coordination for all patients</p>
        </div>
        <Button onClick={handleAddPatient} className="gap-2 h-10 px-6">
          <Plus className="w-4 h-4" />
          Add New Patient
        </Button>
      </div>

      {/* Key Metrics Dashboard */}
      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Patients</p>
                <p className="text-2xl font-bold">{patients.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Activity className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Active Cases</p>
                <p className="text-2xl font-bold">{activePatients}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Follow-ups</p>
                <p className="text-2xl font-bold">{pendingFollowUps}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Visits/Month</p>
                <p className="text-2xl font-bold">{totalVisitsThisMonth}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Patient Directory */}
      <Card>
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div>
              <CardTitle className="text-xl">Patient Directory</CardTitle>
              <CardDescription className="text-sm">
                {filteredPatients.length} patients found • Complete care coordination
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search patients or conditions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-64 h-9"
                />
              </div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="h-9 px-3 border border-gray-200 rounded-md text-sm"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Discharged">Discharged</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Stable">Stable</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredPatients.map((patient) => (
              <div key={patient.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-white text-sm">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-semibold text-gray-900">{patient.name}</h3>
                        <Badge variant="secondary" className={getStatusColor(patient.status)}>
                          {patient.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {patient.age} years old • {patient.gender} • {patient.condition}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {patient.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3" />
                          {patient.email}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          Last visit: {patient.lastVisit}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => handleViewRecords(patient)}
                    >
                      View Records
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => handleScheduleAppointment(patient)}
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      Schedule
                    </Button>
                    <Button 
                      size="sm" 
                      className="h-8 text-xs"
                      onClick={() => handleEditPatient(patient)}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <PatientForm
            patient={editingPatient}
            onSave={handleSavePatient}
            onCancel={() => {
              setShowForm(false)
              setEditingPatient(null)
            }}
          />
        </div>
      )}

      {/* Patient Details Modal */}
      {selectedPatient && (
        <PatientDetailsModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
          onEdit={() => handleEditPatient(selectedPatient)}
          onSchedule={() => handleScheduleAppointment(selectedPatient)}
        />
      )}
    </div>
  )
}
