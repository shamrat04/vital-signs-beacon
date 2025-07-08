
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Upload, Download, Eye, FileText, File, Calendar } from "lucide-react"

const cmsFiles = [
  {
    id: "CMS-2024-001",
    fileName: "HEDIS_Quality_Report_Q1_2024.pdf",
    type: "HEDIS Report",
    uploadDate: "2024-01-15",
    submissionDate: "2024-01-20",
    status: "Submitted",
    size: "2.4 MB",
    provider: "Dr. Sarah Wilson"
  },
  {
    id: "CMS-2024-002",
    fileName: "Medicare_Part_B_Claims_Jan2024.xlsx",
    type: "Claims Data",
    uploadDate: "2024-01-14",
    submissionDate: "Pending",
    status: "Processing",
    size: "5.8 MB",
    provider: "System Generated"
  },
  {
    id: "CMS-2024-003",
    fileName: "Quality_Measures_Report_2023.pdf",
    type: "Quality Measures",
    uploadDate: "2024-01-12",
    submissionDate: "2024-01-18",
    status: "Approved",
    size: "1.2 MB",
    provider: "Dr. James Rodriguez"
  },
  {
    id: "CMS-2024-004",
    fileName: "MIPS_Submission_Q4_2023.xml",
    type: "MIPS Data",
    uploadDate: "2024-01-08",
    submissionDate: "2024-01-15",
    status: "Rejected",
    size: "892 KB",
    provider: "Dr. Lisa Thompson"
  }
]

const fileCategories = [
  { name: "HEDIS Reports", count: 12, color: "bg-blue-100 text-blue-800" },
  { name: "Quality Measures", count: 8, color: "bg-green-100 text-green-800" },
  { name: "MIPS Data", count: 15, color: "bg-purple-100 text-purple-800" },
  { name: "Claims Data", count: 24, color: "bg-orange-100 text-orange-800" }
]

export default function CMSFiles() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  const filteredFiles = cmsFiles.filter(file => {
    const matchesSearch = file.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         file.type.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "All" || file.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Submitted': return 'bg-blue-100 text-blue-800'
      case 'Processing': return 'bg-yellow-100 text-yellow-800'
      case 'Approved': return 'bg-green-100 text-green-800'
      case 'Rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getFileIcon = (fileName: string) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    return extension === 'pdf' ? FileText : File
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">CMS Files Management</h1>
          <p className="text-sm text-gray-600">Manage CMS reporting and compliance documentation</p>
        </div>
        <Button className="gap-2 h-8">
          <Upload className="w-4 h-4" />
          Upload File
        </Button>
      </div>

      {/* File Categories Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        {fileCategories.map((category) => (
          <Card key={category.name}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">{category.name}</p>
                  <p className="text-lg font-bold">{category.count}</p>
                </div>
                <Badge className={category.color}>
                  Active
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Recent Submissions */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Recent Submissions</CardTitle>
            <CardDescription>Latest CMS file submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {cmsFiles.slice(0, 3).map((file) => {
                const FileIcon = getFileIcon(file.fileName)
                return (
                  <div key={file.id} className="flex items-center gap-3 p-2 border rounded-lg">
                    <FileIcon className="w-8 h-8 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.fileName}</p>
                      <p className="text-xs text-gray-500">{file.type}</p>
                    </div>
                    <Badge variant="secondary" className={`${getStatusColor(file.status)} text-xs`}>
                      {file.status}
                    </Badge>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Submission Calendar */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Upcoming Deadlines</CardTitle>
            <CardDescription>Important CMS submission dates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 border rounded-lg bg-red-50 border-red-200">
                <Calendar className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-sm font-medium">HEDIS Q1 Report</p>
                  <p className="text-xs text-red-600">Due: Jan 31, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 border rounded-lg bg-yellow-50 border-yellow-200">
                <Calendar className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="text-sm font-medium">MIPS Data Submission</p>
                  <p className="text-xs text-yellow-600">Due: Feb 15, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 border rounded-lg">
                <Calendar className="w-8 h-8 text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Quality Measures Report</p>
                  <p className="text-xs text-gray-500">Due: Mar 1, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Compliance Status */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Compliance Status</CardTitle>
            <CardDescription>Current compliance overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">HEDIS Compliance</p>
                  <p className="text-xs text-gray-600">2024 Reporting Period</p>
                </div>
                <p className="text-2xl font-bold text-green-600">95%</p>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium">MIPS Score</p>
                  <p className="text-xs text-gray-600">Current year performance</p>
                </div>
                <p className="text-2xl font-bold text-blue-600">87</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
            <div>
              <CardTitle className="text-base">CMS Files Repository</CardTitle>
              <CardDescription className="text-sm">
                {filteredFiles.length} files found
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search files..."
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
                <TableHead className="text-xs">File Name</TableHead>
                <TableHead className="text-xs">Type</TableHead>
                <TableHead className="text-xs">Upload Date</TableHead>
                <TableHead className="text-xs">Submission Date</TableHead>
                <TableHead className="text-xs">Status</TableHead>
                <TableHead className="text-xs">Size</TableHead>
                <TableHead className="text-xs">Provider</TableHead>
                <TableHead className="text-xs">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredFiles.map((file) => {
                const FileIcon = getFileIcon(file.fileName)
                return (
                  <TableRow key={file.id}>
                    <TableCell className="text-xs">
                      <div className="flex items-center gap-2">
                        <FileIcon className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{file.fileName}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">{file.type}</TableCell>
                    <TableCell className="text-xs">{file.uploadDate}</TableCell>
                    <TableCell className="text-xs">{file.submissionDate}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={`${getStatusColor(file.status)} text-xs`}>
                        {file.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs">{file.size}</TableCell>
                    <TableCell className="text-xs">{file.provider}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                          <Eye className="w-3 h-3" />
                        </Button>
                        <Button variant="outline" size="sm" className="h-6 w-6 p-0">
                          <Download className="w-3 h-3" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
