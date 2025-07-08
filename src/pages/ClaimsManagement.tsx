
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Plus, Eye, Edit, DollarSign, Calendar, AlertCircle, CheckCircle } from "lucide-react"

const claimsData = [
  {
    id: "CLM-2024-001",
    patient: "Emily Johnson",
    provider: "Dr. Sarah Wilson",
    service: "Annual Physical Exam",
    date: "2024-01-15",
    amount: "$350.00",
    status: "Approved",
    insurance: "Blue Cross Blue Shield",
    copay: "$25.00"
  },
  {
    id: "CLM-2024-002", 
    patient: "Michael Chen",
    provider: "Dr. James Rodriguez",
    service: "Diabetes Management",
    date: "2024-01-14",
    amount: "$180.00",
    status: "Pending",
    insurance: "Aetna",
    copay: "$40.00"
  },
  {
    id: "CLM-2024-003",
    patient: "Sarah Williams",
    provider: "Dr. Lisa Thompson",
    service: "Prenatal Checkup",
    date: "2024-01-12",
    amount: "$225.00",
    status: "Rejected",
    insurance: "United Healthcare",
    copay: "$0.00"
  },
  {
    id: "CLM-2024-004",
    patient: "Robert Davis",
    provider: "Dr. Michael Chang",
    service: "Cardiology Consultation",
    date: "2024-01-08",
    amount: "$450.00",
    status: "Approved",
    insurance: "Medicare",
    copay: "$0.00"
  }
]

export default function ClaimsManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredClaims = claimsData.filter(claim => {
    const matchesSearch = claim.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         claim.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || claim.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved': return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'Pending': return <AlertCircle className="w-4 h-4 text-yellow-600" />
      case 'Rejected': return <AlertCircle className="w-4 h-4 text-red-600" />
      default: return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-green-100 text-green-800'
      case 'Pending': return 'bg-yellow-100 text-yellow-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const totalAmount = filteredClaims.reduce((sum, claim) => sum + parseFloat(claim.amount.replace('$', '').replace(',', '')), 0)
  const approvedClaims = filteredClaims.filter(claim => claim.status === 'Approved').length
  const pendingClaims = filteredClaims.filter(claim => claim.status === 'Pending').length

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Claims Management</h1>
          <p className="text-sm text-gray-600">Process and track insurance claims</p>
        </div>
        <Button className="gap-2 h-8">
          <Plus className="w-4 h-4" />
          Submit New Claim
        </Button>
      </div>

      {/* Claims Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Claims</p>
                <p className="text-lg font-bold">{filteredClaims.length}</p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600 bg-blue-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total Amount</p>
                <p className="text-lg font-bold">${totalAmount.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600 bg-green-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Approved</p>
                <p className="text-lg font-bold text-green-600">{approvedClaims}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-600 bg-green-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Pending</p>
                <p className="text-lg font-bold text-yellow-600">{pendingClaims}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-yellow-600 bg-yellow-50 p-2 rounded-lg" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div>
              <CardTitle className="text-base">Claims Overview</CardTitle>
              <CardDescription className="text-sm">
                {filteredClaims.length} claims found
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search claims..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 w-56 h-8"
                />
              </div>
              <Button variant="outline" size="icon" className="h-8 w-8">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xs">Claim ID</TableHead>
                <TableHead className="text-xs">Patient</TableHead>
                <TableHead className="text-xs">Provider</TableHead>
                <TableHead className="text-xs">Service</TableHead>
                <TableHead className="text-xs">Date</TableHead>
                <TableHead className="text-xs">Amount</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs">Insurance</TableHead>
                <TableHead className="text-xs">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClaims.map((claim) => (
                <TableRow key={claim.id}>
                  <TableCell className="text-xs font-medium">{claim.id}</TableCell>
                  <TableCell className="text-xs">{claim.patient}</TableCell>
                  <TableCell className="text-xs">{claim.provider}</TableCell>
                  <TableCell className="text-xs">{claim.service}</TableCell>
                  <TableCell className="text-xs">{claim.date}</TableCell>
                  <TableCell className="text-xs font-medium">{claim.amount}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={`${getStatusColor(claim.status)} text-xs flex items-center gap-1 w-fit`}>
                      {getStatusIcon(claim.status)}
                      {claim.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs">{claim.insurance}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                        <Edit className="w-3 h-3" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
