
import { useState } from "react"
import { useParams } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  Heart, 
  Phone, 
  AlertTriangle, 
  Pill, 
  Activity,
  FileText,
  TrendingUp,
  User,
  MapPin,
  Clock
} from "lucide-react"

export function MemberDashboard() {
  const { memberId } = useParams()

  const memberData = {
    id: memberId,
    firstName: "Margaret",
    lastName: "Chen", 
    mrn: "MRN001234",
    dob: "1935-03-15",
    age: 89,
    status: "Active",
    pcp: "Dr. Johnson",
    enrollmentDate: "2022-01-15",
    address: "123 Oak Street, San Francisco, CA 94102",
    phone: "(555) 123-4567",
    emergencyContact: "David Chen (Son) - (555) 987-6543"
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="clinical" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="clinical">Clinical Overview</TabsTrigger>
          <TabsTrigger value="administrative">Administrative</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="clinical" className="space-y-6">
          {/* Member Snapshot */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Demographics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="font-medium">Age:</span> {memberData.age}
                  </div>
                  <div>
                    <span className="font-medium">Gender:</span> Female
                  </div>
                  <div>
                    <span className="font-medium">Language:</span> English/Mandarin
                  </div>
                  <div>
                    <span className="font-medium">Enrollment:</span> {memberData.enrollmentDate}
                  </div>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex items-center gap-1 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    {memberData.address}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Phone className="w-4 h-4" />
                    {memberData.phone}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-500" />
                  Care Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Badge variant="destructive">High Risk</Badge>
                  <Badge variant="outline" className="text-red-600 border-red-200">
                    Palliative Care
                  </Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Primary Diagnosis:</span> CHF, COPD
                  </div>
                  <div>
                    <span className="font-medium">Care Plan:</span> Comprehensive
                  </div>
                  <div>
                    <span className="font-medium">Risk Score:</span> 8.5/10
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Upcoming */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Active Alerts
                  <Badge variant="destructive" className="ml-auto">2</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-red-800">Medication Interaction</p>
                        <p className="text-sm text-red-600">Warfarin + New NSAID prescription</p>
                        <p className="text-xs text-red-500 mt-1">Added 2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-amber-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-800">Assessment Overdue</p>
                        <p className="text-sm text-amber-600">Quarterly assessment due 3 days ago</p>
                        <p className="text-xs text-amber-500 mt-1">Due Jan 15, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Upcoming Appointments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Cardiology Follow-up</p>
                        <p className="text-sm text-gray-600">Dr. Martinez</p>
                        <p className="text-sm text-gray-500">CHF management review</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-medium">Jan 22, 2024</p>
                        <p className="text-gray-500">10:00 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium">Physical Therapy</p>
                        <p className="text-sm text-gray-600">PT Team</p>
                        <p className="text-sm text-gray-500">Mobility assessment</p>
                      </div>
                      <div className="text-right text-sm">
                        <p className="font-medium">Jan 24, 2024</p>
                        <p className="text-gray-500">2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Last Encounter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Primary Care Visit</p>
                      <p className="text-sm text-gray-600">Dr. Johnson</p>
                      <p className="text-sm text-gray-500">Routine follow-up for CHF</p>
                    </div>
                    <p className="text-sm text-gray-500">Jan 10, 2024</p>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-sm"><span className="font-medium">Chief Complaint:</span> Shortness of breath</p>
                    <p className="text-sm"><span className="font-medium">Assessment:</span> CHF stable, med adjustment</p>
                    <p className="text-sm"><span className="font-medium">Plan:</span> Increase Lasix, follow-up in 2 weeks</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5" />
                  Current Medications
                  <Badge variant="outline" className="ml-auto">8</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    { name: "Metoprolol 50mg", frequency: "BID", indication: "CHF" },
                    { name: "Furosemide 40mg", frequency: "Daily", indication: "CHF" },
                    { name: "Lisinopril 10mg", frequency: "Daily", indication: "HTN" },
                    { name: "Warfarin 5mg", frequency: "Daily", indication: "A-Fib" }
                  ].map((med, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-sm">{med.name}</p>
                        <p className="text-xs text-gray-600">{med.indication}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{med.frequency}</Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  View All Medications
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="administrative">
          <Card>
            <CardHeader>
              <CardTitle>Administrative Information</CardTitle>
              <CardDescription>Enrollment, insurance, and contact details</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Administrative view content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Claims, authorizations, and billing information</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Financial view content would go here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
