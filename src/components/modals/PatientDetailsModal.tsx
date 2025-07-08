
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { X, Phone, Mail, MapPin, Calendar, Edit, FileText, Clock } from "lucide-react"

interface PatientDetailsModalProps {
  patient: any
  onClose: () => void
  onEdit: () => void
  onSchedule: () => void
}

export function PatientDetailsModal({ patient, onClose, onEdit, onSchedule }: PatientDetailsModalProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'Discharged': return 'bg-blue-100 text-blue-800'
      case 'Follow-up': return 'bg-yellow-100 text-yellow-800'
      case 'Stable': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const mockVisitHistory = [
    { date: "2024-01-15", type: "Regular Checkup", doctor: "Dr. Smith", notes: "Blood pressure normal" },
    { date: "2024-01-08", type: "Follow-up", doctor: "Dr. Johnson", notes: "Medication adjustment" },
    { date: "2023-12-20", type: "Initial Consultation", doctor: "Dr. Smith", notes: "Diagnosed with hypertension" }
  ]

  const mockMedications = [
    { name: "Lisinopril", dosage: "10mg", frequency: "Once daily", prescribed: "2023-12-20" },
    { name: "Metformin", dosage: "500mg", frequency: "Twice daily", prescribed: "2024-01-08" }
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="bg-primary text-white text-lg">
                {patient.name.split(' ').map((n: string) => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{patient.name}</CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className={getStatusColor(patient.status)}>
                  {patient.status}
                </Badge>
                <span className="text-sm text-gray-500">
                  {patient.age} years old • {patient.gender}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={onEdit}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="outline" size="sm" onClick={onSchedule}>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="history">Visit History</TabsTrigger>
              <TabsTrigger value="medications">Medications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{patient.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{patient.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span>{patient.address}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Medical Information</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium">Primary Condition:</span>
                      <span className="ml-2">{patient.condition}</span>
                    </div>
                    <div>
                      <span className="font-medium">Last Visit:</span>
                      <span className="ml-2">{patient.lastVisit}</span>
                    </div>
                    <div>
                      <span className="font-medium">Patient Since:</span>
                      <span className="ml-2">2023-12-20</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {patient.notes && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Notes</h3>
                  <p className="text-gray-600 bg-gray-50 p-3 rounded">{patient.notes}</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="history" className="space-y-4">
              <h3 className="text-lg font-semibold">Visit History</h3>
              <div className="space-y-3">
                {mockVisitHistory.map((visit, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="font-medium">{visit.date}</span>
                          <Badge variant="outline">{visit.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Provider: {visit.doctor}</p>
                        <p className="text-sm mt-2">{visit.notes}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="medications" className="space-y-4">
              <h3 className="text-lg font-semibold">Current Medications</h3>
              <div className="space-y-3">
                {mockMedications.map((med, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{med.name}</h4>
                        <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
                        <p className="text-xs text-gray-500 mt-1">Prescribed: {med.prescribed}</p>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-4">
              <h3 className="text-lg font-semibold">Documents & Files</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Lab Results - 2024-01-15</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Blood work and vitals</p>
                </div>
                <div className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span className="font-medium">Insurance Card</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Current insurance information</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
