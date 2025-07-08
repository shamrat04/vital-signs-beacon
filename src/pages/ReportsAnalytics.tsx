import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Users, Calendar, DollarSign, Activity, Download, RefreshCw, Plus } from "lucide-react"

const reportCategories = [
  {
    name: "Patient Analytics",
    description: "Demographics, visits, outcomes",
    reports: 12,
    icon: Users,
    color: "bg-blue-50 text-blue-600"
  },
  {
    name: "Financial Reports",
    description: "Revenue, claims, billing",
    reports: 8,
    icon: DollarSign,
    color: "bg-green-50 text-green-600"
  },
  {
    name: "Clinical Quality",
    description: "Quality measures, outcomes",
    reports: 15,
    icon: Activity,
    color: "bg-purple-50 text-purple-600"
  },
  {
    name: "Operational",
    description: "Scheduling, efficiency, workflow",
    reports: 10,
    icon: BarChart3,
    color: "bg-orange-50 text-orange-600"
  }
]

const recentReports = [
  {
    id: "RPT-001",
    name: "Monthly Patient Volume Report",
    category: "Patient Analytics",
    generatedDate: "2024-01-15",
    status: "Ready",
    format: "PDF"
  },
  {
    id: "RPT-002",
    name: "Revenue Cycle Analysis",
    category: "Financial Reports", 
    generatedDate: "2024-01-14",
    status: "Processing",
    format: "Excel"
  },
  {
    id: "RPT-003",
    name: "HEDIS Quality Measures",
    category: "Clinical Quality",
    generatedDate: "2024-01-12",
    status: "Ready",
    format: "PDF"
  }
]

const dashboardMetrics = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users
  },
  {
    title: "Monthly Revenue",
    value: "$45,250",
    change: "+18%", 
    trend: "up",
    icon: DollarSign
  },
  {
    title: "Avg Wait Time",
    value: "18 min",
    change: "-5%",
    trend: "down",
    icon: Calendar
  },
  {
    title: "Provider Utilization",
    value: "84%",
    change: "+3%",
    trend: "up",
    icon: Activity
  }
]

export default function ReportsAnalytics() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("month")

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ready': return 'bg-green-100 text-green-800'
      case 'Processing': return 'bg-yellow-100 text-yellow-800'
      case 'Failed': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Reports & Analytics</h1>
          <p className="text-sm text-gray-600">Comprehensive reporting and business intelligence dashboard</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 h-8">
            <RefreshCw className="w-4 h-4" />
            Refresh Data
          </Button>
          <Button className="gap-2 h-8">
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="reports">Report Library</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="custom">Custom Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            {dashboardMetrics.map((metric) => (
              <Card key={metric.title}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">{metric.title}</p>
                      <p className="text-lg font-bold">{metric.value}</p>
                    </div>
                    <metric.icon className="w-8 h-8 text-blue-600 bg-blue-50 p-2 rounded-lg" />
                  </div>
                  <div className="mt-2 flex items-center">
                    <TrendingUp className={`w-3 h-3 mr-1 ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`} />
                    <span className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {metric.change} from last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Placeholder */}
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Patient Volume Trends</CardTitle>
                <CardDescription>Monthly patient visits over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Revenue Analysis</CardTitle>
                <CardDescription>Financial performance breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Chart visualization would be here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          {/* Report Categories */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {reportCategories.map((category) => (
              <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className={`w-8 h-8 ${category.color} p-2 rounded-lg`} />
                    <div>
                      <h3 className="text-sm font-medium">{category.name}</h3>
                      <p className="text-xs text-gray-500">{category.reports} reports</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Reports */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Recent Reports</CardTitle>
              <CardDescription>Latest generated reports and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-8 h-8 text-gray-400" />
                      <div>
                        <h4 className="text-sm font-medium">{report.name}</h4>
                        <p className="text-xs text-gray-500">{report.category} • Generated: {report.generatedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className={`${getStatusColor(report.status)} text-xs`}>
                        {report.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {report.format}
                      </Badge>
                      <Button variant="outline" size="sm" className="h-6 gap-1">
                        <Download className="w-3 h-3" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Performance Indicators</CardTitle>
                <CardDescription>Key performance metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Patient Satisfaction</p>
                      <p className="text-xs text-gray-600">Average rating this month</p>
                    </div>
                    <p className="text-2xl font-bold text-blue-600">4.7</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">Quality Score</p>
                      <p className="text-xs text-gray-600">HEDIS composite</p>
                    </div>
                    <p className="text-2xl font-bold text-green-600">89%</p>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">No-Show Rate</p>
                      <p className="text-xs text-gray-600">Missed appointments</p>
                    </div>
                    <p className="text-2xl font-bold text-purple-600">8.2%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Predictive Analytics</CardTitle>
                <CardDescription>AI-powered insights and forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm font-medium mb-1">Patient Volume Forecast</p>
                    <p className="text-xs text-gray-600">Expected 15% increase next month</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm font-medium mb-1">Risk Stratification</p>
                    <p className="text-xs text-gray-600">247 high-risk patients identified</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{width: '35%'}}></div>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <p className="text-sm font-medium mb-1">Revenue Projection</p>
                    <p className="text-xs text-gray-600">On track to meet quarterly goals</p>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Custom Report Builder</CardTitle>
              <CardDescription>Create personalized reports with specific data points</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Build Custom Reports</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Create tailored reports by selecting specific metrics, timeframes, and visualization types
                </p>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  Start Building Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
