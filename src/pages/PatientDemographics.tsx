
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Edit, Plus, Phone, Mail, MapPin, Calendar, User, Heart, AlertCircle } from "lucide-react"

const patientData = {
  id: "PAT-001",
  name: "Emily Johnson",
  age: 34,
  dob: "1990-03-15",
  gender: "Female",
  phone: "(555) 123-4567",
  email: "emily.johnson@email.com",
  address: "123 Oak Street, Springfield, IL 62701",
  emergencyContact: {
    name: "Michael Johnson",
    relationship: "Spouse",
    phone: "(555) 987-6543"
  },
  insurance: {
    primary: "Blue Cross Blue Shield",
    policyNumber: "BC123456789",
    groupNumber: "GRP001",
    effectiveDate: "2024-01-01"
  },
  demographics: {
    race: "Caucasian",
    ethnicity: "Non-Hispanic",
    language: "English",
    maritalStatus: "Married",
    occupation: "Software Engineer",
    employer: "Tech Solutions Inc."
  },
  medicalInfo: {
    bloodType: "O+",
    allergies: ["Penicillin", "Shellfish"],
    conditions: ["Hypertension", "Seasonal Allergies"],
    medications: ["Lisinopril 10mg", "Zyrtec 10mg"]
  }
}

export default function PatientDemographics() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedPatient, setSelectedPatient] = useState(patientData)

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Patient Demographics</h1>
          <p className="text-sm text-gray-600">Comprehensive patient information and demographics</p>
        </div>
        <Button className="gap-2 h-8">
          <Plus className="w-4 h-4" />
          Add New Patient
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Patient Search/List */}
        <Card className="lg:col-span-1">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Patient Search</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 h-8"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="p-3 border rounded-lg bg-blue-50 border-blue-200 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-primary text-white text-xs">EJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Emily Johnson</p>
                    <p className="text-xs text-gray-500">DOB: 03/15/1990</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Details */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-white">EJ</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{selectedPatient.name}</CardTitle>
                  <CardDescription>Patient ID: {selectedPatient.id}</CardDescription>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-2 h-8">
                <Edit className="w-3 h-3" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="insurance">Insurance</TabsTrigger>
                <TabsTrigger value="demographics">Demographics</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
              </TabsList>

              <TabsContent value="basic" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Full Name</Label>
                    <p className="text-sm">{selectedPatient.name}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Age</Label>
                    <p className="text-sm">{selectedPatient.age} years old</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Date of Birth</Label>
                    <p className="text-sm">{selectedPatient.dob}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Gender</Label>
                    <p className="text-sm">{selectedPatient.gender}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="contact" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <Label className="text-xs font-medium text-gray-500">Primary Phone</Label>
                      <p className="text-sm">{selectedPatient.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <Label className="text-xs font-medium text-gray-500">Email</Label>
                      <p className="text-sm">{selectedPatient.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <div>
                      <Label className="text-xs font-medium text-gray-500">Address</Label>
                      <p className="text-sm">{selectedPatient.address}</p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <Label className="text-xs font-medium text-gray-500">Emergency Contact</Label>
                    <p className="text-sm">{selectedPatient.emergencyContact.name} ({selectedPatient.emergencyContact.relationship})</p>
                    <p className="text-sm text-gray-600">{selectedPatient.emergencyContact.phone}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="insurance" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Primary Insurance</Label>
                    <p className="text-sm">{selectedPatient.insurance.primary}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Policy Number</Label>
                    <p className="text-sm">{selectedPatient.insurance.policyNumber}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Group Number</Label>
                    <p className="text-sm">{selectedPatient.insurance.groupNumber}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Effective Date</Label>
                    <p className="text-sm">{selectedPatient.insurance.effectiveDate}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="demographics" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Race</Label>
                    <p className="text-sm">{selectedPatient.demographics.race}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Ethnicity</Label>
                    <p className="text-sm">{selectedPatient.demographics.ethnicity}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Language</Label>
                    <p className="text-sm">{selectedPatient.demographics.language}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Marital Status</Label>
                    <p className="text-sm">{selectedPatient.demographics.maritalStatus}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Occupation</Label>
                    <p className="text-sm">{selectedPatient.demographics.occupation}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Employer</Label>
                    <p className="text-sm">{selectedPatient.demographics.employer}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="medical" className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Blood Type</Label>
                    <p className="text-sm">{selectedPatient.medicalInfo.bloodType}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Allergies</Label>
                    <div className="flex gap-2 mt-1">
                      {selectedPatient.medicalInfo.allergies.map((allergy) => (
                        <Badge key={allergy} variant="destructive" className="text-xs">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {allergy}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Medical Conditions</Label>
                    <div className="flex gap-2 mt-1">
                      {selectedPatient.medicalInfo.conditions.map((condition) => (
                        <Badge key={condition} variant="outline" className="text-xs">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Current Medications</Label>
                    <div className="flex gap-2 mt-1">
                      {selectedPatient.medicalInfo.medications.map((medication) => (
                        <Badge key={medication} variant="secondary" className="text-xs">
                          {medication}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
