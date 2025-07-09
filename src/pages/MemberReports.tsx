
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3 } from "lucide-react"

export function MemberReports() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600">Analytics and reporting for member care</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Member Reports
          </CardTitle>
          <CardDescription>Care analytics and outcomes reporting</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Reporting interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
