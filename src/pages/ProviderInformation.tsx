
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Edit, Plus, Phone, Mail, MapPin, Calendar, Award, Stethoscope, Building } from "lucide-react"

const providers = [
  {
    id: "PROV-001",
    name: "Dr. Sarah Wilson",
    specialty: "Internal Medicine",
    license: "MD12345",
    npi: "1234567890",
    phone: "(555) 123-4567",
    email: "sarah.wilson@healthcare.com",
    address: "123 Medical Center Dr, Suite 200",
    patients: 847,
    experience: "15 years",
    status: "Active"
  },
  {
    id: "PROV-002",
    name: "Dr. James Rodriguez",
    specialty: "Cardiology",
    license: "MD23456", 
    npi: "2345678901",
    phone: "(555) 234-5678",
    email: "james.rodriguez@healthcare.com",
    address: "456 Heart Institute Blvd",
    patients: 523,
    experience: "12 years",
    status: "Active"
  },
  {
    id: "PROV-003",
    name: "Dr. Lisa Thompson",
    specialty: "Obstetrics & Gynecology",
    license: "MD34567",
    npi: "3456789012",
    phone: "(555) 345-6789",
    email: "lisa.thompson@healthcare.com", 
    address: "789 Women's Health Center",
    patients: 692,
    experience: "18 years",
    status: "Active"
  },
  {
    id: "PROV-004",
    name: "Dr. Michael Chang",
    specialty: "Pediatrics",
    license: "MD45678",
    npi: "4567890123",
    phone: "(555) 456-7890",
    email: "michael.chang@healthcare.com",
    address: "321 Children's Medical Plaza",
    patients: 1234,
    experience: "8 years",
    status: "On Leave"
  }
]

export default function ProviderInformation() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProvider, setSelectedProvider] = useState(providers[0])

  const filteredProviders = providers.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800'
      case 'On Leave': return 'bg-yellow-100 text-yellow-800'
      case 'Inactive': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Provider Information</h1>
          <p className="text-sm text-gray-600">Manage healthcare provider profiles and credentials</p>
        </div>
        <Button className="gap-2 h-8">
          <Plus className="w-4 h-4" />
          Add Provider
        </Button>
      </div>

      {/* Provider Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Providers</p>
                <p className="text-lg font-bold">{providers.length}</p>
              </div>
              <Stethoscope className="w-8 h-8 text-blue-600 bg-blue-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Active Providers</p>
                <p className="text-lg font-bold text-green-600">{providers.filter(p => p.status === 'Active').length}</p>
              </div>
              <Building className="w-8 h-8 text-green-600 bg-green-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Specialties</p>
                <p className="text-lg font-bold">8</p>
              </div>
              <Award className="w-8 h-8 text-purple-600 bg-purple-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Patients</p>
                <p className="text-lg font-bold">{providers.reduce((sum, p) => sum + p.patients, 0).toLocaleString()}</p>
              </div>
              <Calendar className="w-8 h-8 text-orange-600 bg-orange-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Provider List */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Provider Directory</CardTitle>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search providers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 h-8"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {filteredProviders.map((provider) => (
                <div 
                  key={provider.id}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedProvider.id === provider.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedProvider(provider)}
                >
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary text-white text-sm">
                        {provider.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-sm">{provider.name}</h3>
                        <Badge variant="secondary" className={`${getStatusColor(provider.status)} text-xs`}>
                          {provider.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">{provider.specialty}</p>
                      <p className="text-xs text-gray-400">{provider.patients} patients</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Provider Details */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary text-white">
                    {selectedProvider.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{selectedProvider.name}</CardTitle>
                  <CardDescription>{selectedProvider.specialty}</CardDescription>
                </div>
              </div>
              <Button variant="outline" size="sm" className="gap-2 h-8">
                <Edit className="w-3 h-3" />
                Edit
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="performance">Performance</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Provider ID</Label>
                    <p className="text-sm">{selectedProvider.id}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Experience</Label>
                    <p className="text-sm">{selectedProvider.experience}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Status</Label>
                    <Badge variant="secondary" className={`${getStatusColor(selectedProvider.status)} text-xs w-fit`}>
                      {selectedProvider.status}
                    </Badge>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Total Patients</Label>
                    <p className="text-sm">{selectedProvider.patients.toLocaleString()}</p>
                  </div>
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <div>
                      <Label className="text-xs font-medium text-gray-500">Phone</Label>
                      <p className="text-sm">{selectedProvider.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <div>
                      <Label className="text-xs font-medium text-gray-500">Email</Label>
                      <p className="text-sm">{selectedProvider.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <div>
                      <Label className="text-xs font-medium text-gray-500">Office Address</Label>
                      <p className="text-sm">{selectedProvider.address}</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="credentials" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Medical License</Label>
                    <p className="text-sm">{selectedProvider.license}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">NPI Number</Label>
                    <p className="text-sm">{selectedProvider.npi}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">Board Certification</Label>
                    <p className="text-sm">American Board of {selectedProvider.specialty}</p>
                  </div>
                  <div>
                    <Label className="text-xs font-medium text-gray-500">DEA Number</Label>
                    <p className="text-sm">DE1234567</p>
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <Label className="text-xs font-medium text-gray-500">Certifications</Label>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline" className="text-xs">BLS Certified</Badge>
                    <Badge variant="outline" className="text-xs">ACLS Certified</Badge>
                    <Badge variant="outline" className="text-xs">Board Certified</Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Today's Appointments</p>
                      <p className="text-xs text-gray-500">Current schedule</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">12</p>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">This Week</p>
                      <p className="text-xs text-gray-500">Total appointments</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">68</p>
                  </div>
                  <div className="flex justify-between items-center p-3 border rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Available Slots</p>
                      <p className="text-xs text-gray-500">Next 7 days</p>
                    </div>
                    <p className="text-2xl font-bold text-orange-600">23</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="performance" className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Patient Satisfaction</p>
                      <p className="text-xs text-gray-600">Average rating</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">4.8</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Quality Score</p>
                      <p className="text-xs text-gray-600">MIPS performance</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">92</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Productivity</p>
                      <p className="text-xs text-gray-600">Patients per day</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">24</p>
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
