
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TestTube } from "lucide-react"

export function MemberLabs() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Laboratory Results</h1>
        <p className="text-gray-600">Lab orders, results, and trends</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="w-5 h-5" />
            Lab Results
          </CardTitle>
          <CardDescription>Recent and historical laboratory data</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Laboratory management interface coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}
